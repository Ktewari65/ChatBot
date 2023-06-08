import React, { useState } from 'react';
import "./ChatBot.css"


const ChatBox = ({ onSendMessage, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
     // console.log(messages,message)
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      <div className="chat-box-body">
        {messages.map((msg, index) => (
      
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
      <div className="chat-box-footer">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;