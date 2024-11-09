import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Message = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  
  // Connect to the Socket.IO server
  const socket = io('http://localhost:5000'); // Adjust URL if needed

  // Listen for messages from the server
  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    return () => {
      socket.off('chatMessage'); // Cleanup listener on component unmount
    };
  }, []);

  // Send a message
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chatMessage', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        <ul>
          {chat.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Message;
