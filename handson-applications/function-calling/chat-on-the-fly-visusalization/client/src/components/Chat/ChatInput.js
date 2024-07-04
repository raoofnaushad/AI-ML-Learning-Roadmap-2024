import React from 'react';
import './ChatInput.css';

function ChatInput({ input, handleInputChange, handleKeyPress, handleSend }) {
  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;