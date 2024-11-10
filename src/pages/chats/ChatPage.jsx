import React, { useState } from 'react';
import { MessageCircle, Users, Send, ArrowLeft } from 'lucide-react';

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState('dm');
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  
  const dmConversations = [
    {
      id: 1,
      name: "John Smith",
      lastSeen: "today at 12:30 PM",
      messages: [
        { sender: "user", text: "Hey, how's the AI model performance looking?", time: "10:30 AM" },
        { sender: "other", text: "The results are promising! We're seeing a 15% improvement in accuracy.", time: "10:35 AM" },
        { sender: "user", text: "That's fantastic news! When can we schedule a demo?", time: "10:36 AM" },
        { sender: "other", text: "How about next Tuesday at 2 PM?", time: "10:40 AM" },
        { sender: "user", text: "Perfect, I'll send a calendar invite.", time: "10:41 AM" },
        { sender: "other", text: "Great, looking forward to it!", time: "10:42 AM" }
      ]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastSeen: "yesterday at 3:45 PM",
      messages: [
        { sender: "user", text: "Could you share the latest testing results?", time: "2:15 PM" },
        { sender: "other", text: "I'll prepare a detailed report by EOD.", time: "2:20 PM" },
        { sender: "user", text: "Thanks! Include the validation metrics too.", time: "2:21 PM" },
        { sender: "other", text: "Will do!", time: "2:22 PM" },
        { sender: "user", text: "And the deployment timeline if possible", time: "2:25 PM" },
        { sender: "other", text: "Sure, I'll add that section", time: "2:30 PM" }
      ]
    },
    {
      "id": 3,
      "name": "Emma Taylor",
      "lastSeen": "yesterday at 4:20 PM",
      "messages": [
        { "sender": "user", "text": "Hi, could you update me on how your product has been performing?", "time": "9:15 AM" },
        { "sender": "other", "text": "Sure! We've been able to improve response time by 20% over the past quarter.", "time": "9:18 AM" },
        { "sender": "user", "text": "That's great to hear! Have you run any performance tests lately?", "time": "9:20 AM" },
        { "sender": "other", "text": "Yes, our latest tests show stable performance even under peak loads.", "time": "9:23 AM" },
        { "sender": "user", "text": "Impressive. Any updates on user feedback regarding speed or reliability?", "time": "9:25 AM" },
        { "sender": "other", "text": "Users are reporting faster access times, and reliability has been above 98% consistently.", "time": "9:28 AM" },
        { "sender": "user", "text": "Sounds promising! Thanks for the update.", "time": "9:30 AM" }
      ]
    },
    {
      "id": 4,
      "name": "James Wilson",
      "lastSeen": "today at 2:05 PM",
      "messages": [
        { "sender": "user", "text": "Hi, how’s the server uptime been recently?", "time": "11:45 AM" },
        { "sender": "other", "text": "Hello! Uptime has held steady at 99.7%, even during high-demand hours.", "time": "11:48 AM" },
        { "sender": "user", "text": "Glad to hear it. Have there been any issues with system lag?", "time": "11:49 AM" },
        { "sender": "other", "text": "No major lag reported; average latency is around 150ms.", "time": "11:52 AM" },
        { "sender": "user", "text": "Nice work. Can you keep me posted on any changes?", "time": "11:55 AM" },
        { "sender": "other", "text": "Absolutely. We’ll send out an update after the next performance review.", "time": "11:57 AM" }
      ]
    },
    {
      "id": 5,
      "name": "Sophia Brown",
      "lastSeen": "today at 10:15 AM",
      "messages": [
        { "sender": "user", "text": "Hi! Can you share how sales have been since the last collection launch?", "time": "8:00 AM" },
        { "sender": "other", "text": "Hello! Sales have been up by 25% since the launch, thanks to our new targeted ad strategy.", "time": "8:02 AM" },
        { "sender": "user", "text": "That’s impressive. How about customer feedback on the fabric and fit?", "time": "8:05 AM" },
        { "sender": "other", "text": "Feedback has been great! Over 90% of customers are satisfied with the fabric quality and fit adjustments.", "time": "8:08 AM" },
        { "sender": "user", "text": "Good to hear. Are you facing any delays with production?", "time": "8:10 AM" },
        { "sender": "other", "text": "No delays so far! We've optimized our supply chain to avoid bottlenecks.", "time": "8:12 AM" }
      ]
    },
    {
      "id": 6,
      "name": "Lucas Evans",
      "lastSeen": "yesterday at 6:30 PM",
      "messages": [
        { "sender": "user", "text": "Hi, how are your online courses performing in terms of student engagement?", "time": "1:15 PM" },
        { "sender": "other", "text": "Hello! Engagement is at an all-time high, with 80% of students completing the new modules.", "time": "1:18 PM" },
        { "sender": "user", "text": "That’s great. Are there any improvements in test scores?", "time": "1:20 PM" },
        { "sender": "other", "text": "Yes, average test scores have increased by 15% since we introduced interactive quizzes.", "time": "1:23 PM" },
        { "sender": "user", "text": "Awesome! Do you plan to expand the content soon?", "time": "1:25 PM" },
        { "sender": "other", "text": "Definitely. We’re adding two more courses next quarter to keep up with demand.", "time": "1:28 PM" }
      ]
    },
    {
      "id": 7,
      "name": "Ethan Walker",
      "lastSeen": "today at 5:20 PM",
      "messages": [
        { "sender": "user", "text": "Hi! Can you tell me about the performance of the new game update?", "time": "11:00 AM" },
        { "sender": "other", "text": "Sure! The latest update reduced load times by 30% and increased player retention by 20%.", "time": "11:02 AM" },
        { "sender": "user", "text": "That’s great. Any player feedback on gameplay or bugs?", "time": "11:04 AM" },
        { "sender": "other", "text": "Players are loving the new levels, and we’ve fixed 95% of reported bugs so far.", "time": "11:06 AM" },
        { "sender": "user", "text": "Good to hear! Are there plans for additional content?", "time": "11:07 AM" },
        { "sender": "other", "text": "Yes, we're launching a new game mode next month to keep players engaged.", "time": "11:09 AM" }
      ]
    },
    {
      "id": 8,
      "name": "Dr. Michael Lee",
      "lastSeen": "yesterday at 2:10 PM",
      "messages": [
        { "sender": "user", "text": "Hi, could you share recent performance stats for the new health app?", "time": "9:00 AM" },
        { "sender": "other", "text": "Hello! Since its release, user engagement has been strong—over 70% of users log in daily to track health metrics.", "time": "9:03 AM" },
        { "sender": "user", "text": "That’s promising. Any feedback on the app’s usability or feature requests?", "time": "9:05 AM" },
        { "sender": "other", "text": "Yes, users have praised the interface, though some requested additional workout tracking features. We’re planning an update to include those.", "time": "9:08 AM" },
        { "sender": "user", "text": "Are there any partnerships planned to support the app’s reach?", "time": "9:10 AM" },
        { "sender": "other", "text": "Indeed, we’re finalizing partnerships with local clinics to integrate more health data and support for chronic conditions.", "time": "9:12 AM" }
      ]
    },          
  ];

  const broadcastChannels = [
    {
      id: 1,
      name: "Moderna Tech",
      recipients: 156,
      messages: [
        { sender: "broadcast", text: "Q1 2024 AI Initiative Update", time: "11:00 AM" },
        { sender: "broadcast", text: "Our ML models have achieved 95% accuracy in clinical trials", time: "11:01 AM" },
        { sender: "broadcast", text: "Phase 2 deployment scheduled for next month", time: "11:02 AM" },
        { sender: "broadcast", text: "Team meeting tomorrow at 10 AM EST", time: "11:05 AM" },
        { sender: "broadcast", text: "Please review the documentation before the meeting", time: "11:06 AM" },
        { sender: "broadcast", text: "Links shared via email", time: "11:10 AM" }
      ]
    },
    {
      id: 2,
      name: "Nike Dimension",
      recipients: 89,
      messages: [
        { sender: "broadcast", text: "New AI-powered product launch next week", time: "3:00 PM" },
        { sender: "broadcast", text: "Beta testing results exceeded expectations", time: "3:01 PM" },
        { sender: "broadcast", text: "Marketing campaign starts on Monday", time: "3:05 PM" },
        { sender: "broadcast", text: "All hands meeting scheduled for Friday", time: "3:10 PM" },
        { sender: "broadcast", text: "Please prepare your progress reports", time: "3:15 PM" },
        { sender: "broadcast", text: "Contact Sarah for any questions", time: "3:20 PM" }
      ]
    }
  ];

  const conversations = activeTab === 'dm' ? dmConversations : broadcastChannels;

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  return (
    <div className="h-screen w-screen flex bg-[#0f172a]">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Messages</h2>
            <div className="flex gap-2">
              <button
                className={`p-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'dm' ? 'bg-blue-600' : 'bg-gray-800'
                } text-white`}
                onClick={() => {
                  setActiveTab('dm');
                  setSelectedChat(null);
                }}
              >
                <MessageCircle size={20} />
                Direct Messages
              </button>
              <button
                className={`p-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'broadcast' ? 'bg-blue-600' : 'bg-gray-800'
                } text-white`}
                onClick={() => {
                  setActiveTab('broadcast');
                  setSelectedChat(null);
                }}
              >
                <Users size={20} />
                Broadcast
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Conversation List */}
          <div className={`${selectedChat ? 'hidden md:block' : ''} w-full md:w-80 border-r border-gray-800 overflow-y-auto bg-[#1e293b]`}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
                onClick={() => handleChatSelect(conv)}
              >
                <h3 className="font-medium text-white">{conv.name}</h3>
                {activeTab === 'broadcast' && (
                  <p className="text-xs text-gray-400">{conv.recipients} recipients</p>
                )}
                <p className="text-sm text-gray-400 truncate">
                  {conv.messages[conv.messages.length - 1].text}
                </p>
              </div>
            ))}
          </div>

          {/* Chat Area */}
          {selectedChat ? (
            <div className="flex-1 flex flex-col bg-[#0f172a]">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-800 flex items-center gap-4">
                <button 
                  className="md:hidden text-white"
                  onClick={handleBack}
                >
                  <ArrowLeft size={24} />
                </button>
                <div>
                  <h3 className="font-medium text-white">{selectedChat.name}</h3>
                  {activeTab === 'broadcast' ? (
                    <p className="text-sm text-gray-400">{selectedChat.recipients} recipients</p>
                  ) : (
                    <p className="text-sm text-gray-400">{selectedChat.lastSeen}</p>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedChat.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-blue-600'
                          : 'bg-[#1e293b]'
                      }`}
                    >
                      <p className="text-white">{msg.text}</p>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      activeTab === 'broadcast'
                        ? "Type your broadcast message..."
                        : "Type your message..."
                    }
                    className="flex-1 bg-[#1e293b] text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors text-white"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center bg-[#0f172a] text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;