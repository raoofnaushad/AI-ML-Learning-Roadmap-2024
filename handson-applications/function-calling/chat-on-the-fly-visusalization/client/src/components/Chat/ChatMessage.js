
function ChatMessage({ message }) {
    return (
      <div className={`chat-message ${message.sender}`}>
        <div className={`chat-bubble ${message.sender}`}>
          {message.text}
        </div>
      </div>
    );
  }
  
  export default ChatMessage;