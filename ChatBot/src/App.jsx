import React, { useState } from 'react';
import ChatBox from './components/ChatBot';
import "./App.css"

function App() {
  const [chatBoxes, setChatBoxes] = useState([]);

  const addChatBox = () => {
    const newChatBox = { id: Math.random() };   //Date.now().toString()
    setChatBoxes([...chatBoxes, newChatBox]);
  
  };

  const removeChatBox = (id) => {
    setChatBoxes(chatBoxes.filter((chatBox) => chatBox.id !== id));
  
  }

  const sendMessage = (message, chatBoxId) => {
     const updatedChatBoxes = chatBoxes.map((chatBox) => {
       const updatedMessages = chatBox.id === chatBoxId ? [...chatBox.messages, message] : chatBox.messages;
       return {
         ...chatBox,
         messages: updatedMessages,
       };
     });
  
     setChatBoxes(updatedChatBoxes);
  };
 

  return (
    <div>
      <button onClick={addChatBox}>Add Chat Box</button>
      <div className="chat-boxes-container">
        {chatBoxes.map((chatBox) => (
          <ChatBox
            key={chatBox.id}
            onSendMessage={(message) => sendMessage(message, chatBox.id)}
            onClose={() => removeChatBox(chatBox.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
