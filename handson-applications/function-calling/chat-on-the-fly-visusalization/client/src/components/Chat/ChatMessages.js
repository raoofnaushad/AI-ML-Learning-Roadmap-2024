import React from 'react';
import ChatMessage from './ChatMessage';

function ChatMessages({ messages, messagesEndRef }) {
  return (
    <div className="chat-messages" style={{ overflowY: 'auto' }}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;