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
        { sender: "other", text: "Hey, how's the AI model performance looking?", time: "10:30 AM" },
        { sender: "user", text: "The results are promising! We're seeing a 15% improvement in accuracy.", time: "10:35 AM" },
        { sender: "other", text: "That's fantastic news! When can we schedule a demo?", time: "10:36 AM" },
        { sender: "user", text: "How about next Tuesday at 2 PM?", time: "10:40 AM" },
        { sender: "other", text: "Perfect, I'll send a calendar invite.", time: "10:41 AM" },
        { sender: "user", text: "Great, looking forward to it!", time: "10:42 AM" }
      ]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastSeen: "yesterday at 3:45 PM",
      messages: [
        { sender: "other", text: "Could you share the latest testing results?", time: "2:15 PM" },
        { sender: "user", text: "I'll prepare a detailed report by EOD.", time: "2:20 PM" },
        { sender: "other", text: "Thanks! Include the validation metrics too.", time: "2:21 PM" },
        { sender: "user", text: "Will do!", time: "2:22 PM" },
        { sender: "other", text: "And the deployment timeline if possible", time: "2:25 PM" },
        { sender: "user", text: "Sure, I'll add that section", time: "2:30 PM" }
      ]
    }
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