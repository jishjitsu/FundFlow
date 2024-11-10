import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import http from 'http';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// User Schema (for both Investor and Company)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['investor', 'company'], required: true },
  
  // Common fields
  userId: { type: String, unique: true, required: true }, 

  // Fields for Investor
  companyName: { type: String }, // Will be empty for investors
  sector: { type: String }, // Will be empty for investors
  location: { type: String }, // Will be empty for investors

  // Fields for Company
  companyName: { type: String, required: function() { return this.role === 'company'; }},
  sector: { type: String, required: function() { return this.role === 'company'; }},
  location: { type: String, required: function() { return this.role === 'company'; }},
});
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate content
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = await response.text();  // Make sure to await the text() function if it's a promise.

    res.json({ reply: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});
const User = mongoose.model('User', userSchema);

// Register Route
app.post('/api/register', async (req, res) => {
  const { name, email, password, role, companyName, sector, location } = req.body;

  try {
    // Validate the role field
    if (!['investor', 'company'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Generate a unique userId based on the role
    const userCount = await User.countDocuments({ role });
    const uniqueIdPrefix = role === 'investor' ? 'INV' : 'CMP';
    const userId = `${uniqueIdPrefix}${userCount + 1}`;  // Correct string interpolation

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user based on the role
    const newUser = new User({
      userId,
      email,
      password: hashedPassword,
      role,
      companyName: role === 'company' ? companyName : undefined,
      sector: role === 'company' ? sector : undefined,
      location: role === 'company' ? location : undefined,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

// Login Route with JWT
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Protected Route Example
app.get('/api/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard!' });
});

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.status(403).json({ error: 'Token is not valid' });
    req.user = user;
    next();
  });
}

// Send a message route
app.post('/api/chat/message', authenticateToken, async (req, res) => {
  const { receiverId, message } = req.body;
  const senderId = req.user.id; // This would be extracted from the JWT token

  try {
    const newMessage = new Chat({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

// Fetch messages route
app.get('/api/chat/messages', authenticateToken, async (req, res) => {
  const userId = req.user.id; // The logged-in user's ID (either investor or owner)
  
  try {
    const messages = await Chat.find({
      $or: [
        { senderId: userId },
        { receiverId: userId }
      ]
    }).sort({ timestamp: 1 });  // Sorting messages by timestamp

    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

