import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim() && !isLoading) {
      setIsLoading(true);
      
      // Add user message immediately
      const userMessage = { sender: 'user', text: input.trim() };
      setMessages(prev => [...prev, userMessage]);
      const currentInput = input.trim();
      setInput(''); // Clear input immediately after sending

      try {
        const response = await axios.post('http://localhost:5000/api/chat', {
          message: currentInput
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data && response.data.reply) {
          setMessages(prev => [...prev, {
            sender: 'bot',
            text: response.data.reply
          }]);
        }
        
      } catch (error) {
        let errorMessage = 'Sorry, I encountered an error. Please try again later.';
        
        if (error.response) {
          switch (error.response.status) {
            case 429:
              errorMessage = 'I\'m receiving too many messages. Please wait a moment and try again.';
              break;
            case 401:
            case 403:
              errorMessage = 'There seems to be an authentication issue. Please contact support.';
              break;
            default:
              errorMessage = error.response.data?.error || errorMessage;
              break;
          }
        }

        setMessages(prev => [...prev, {
          sender: 'bot',
          text: errorMessage,
          isError: true
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container" style={styles.chatbotContainer}>
      {/* Chat Toggle Button */}
      <button 
        onClick={handleToggleChat} 
        style={styles.toggleButton}
        className="chat-toggle"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Chat Header */}
          <div style={styles.chatHeader}>
            <h3 style={styles.headerTitle}>Fundflow Assistant</h3>
          </div>

          {/* Chat Messages */}
          <div style={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.sender === 'user' ? styles.userMessage : styles.botMessage),
                  ...(msg.isError && styles.errorMessage)
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={{...styles.message, ...styles.botMessage, ...styles.loadingMessage}}>
                <div style={styles.loadingDots}>
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div style={styles.inputContainer}>
            <textarea
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows="1"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              style={styles.sendButton}
              disabled={isLoading || !input.trim()}
            >
              ↗️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  toggleButton: {
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  chatWindow: {
    position: 'absolute',
    bottom: '70px',
    right: '0px',
    width: '350px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatHeader: {
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
  },
  chatBody: {
    flex: 1,
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f5f5f5',
  },
  message: {
    maxWidth: '80%',
    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '5px',
    wordWrap: 'break-word',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderBottomRightRadius: '5px',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    color: '#333',
    borderBottomLeftRadius: '5px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  errorMessage: {
    backgroundColor: '#ffebee',
    color: '#c62828',
  },
  loadingMessage: {
    backgroundColor: '#e0e0e0',
  },
  loadingDots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
  },
  inputContainer: {
    padding: '15px',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    gap: '10px',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '20px',
    outline: 'none',
    resize: 'none',
    fontSize: '14px',
    lineHeight: '1.4',
    maxHeight: '100px',
    overflowY: 'auto',
  },
  sendButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#45a049',
    },
    ':disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
  },
};

export default Chatbot;