import React, { useState } from 'react';
import { MessageCircle, Users, Send } from 'lucide-react';

const ChatInterface = () => {
  const [activeTab, setActiveTab] = useState('dm');
  const [message, setMessage] = useState('');
  
  const conversations = [
    {
      id: 1,
      name: "AI Systems Owner",
      messages: [
        { sender: "owner", text: "Welcome to all investors! Our Q1 progress report is now available.", time: "10:30 AM" },
        { sender: "investor", text: "Thanks for the update. Could you clarify the AI model deployment timeline?", time: "10:35 AM" }
      ]
    },
    {
      id: 2,
      name: "Quantum Computing Team",
      messages: [
        { sender: "owner", text: "New quantum circuit breakthrough achieved!", time: "2:15 PM" }
      ]
    }
  ];

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
                onClick={() => setActiveTab('dm')}
              >
                <MessageCircle size={20} />
                Direct Messages
              </button>
              <button
                className={`p-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'broadcast' ? 'bg-blue-600' : 'bg-gray-800'
                } text-white`}
                onClick={() => setActiveTab('broadcast')}
              >
                <Users size={20} />
                Broadcast
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Conversation List */}
          <div className="w-80 border-r border-gray-800 overflow-y-auto bg-[#1e293b]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
              >
                <h3 className="font-medium text-white">{conv.name}</h3>
                <p className="text-sm text-gray-400 truncate">
                  {conv.messages[conv.messages.length - 1].text}
                </p>
              </div>
            ))}
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-[#0f172a]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeTab === 'broadcast' && (
                <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-3 mb-4 text-sm text-blue-100">
                  Broadcasting to all investors of AI Systems (73 recipients)
                </div>
              )}
              
              {conversations[0].messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === 'owner' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'owner'
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
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;