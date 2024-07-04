import React, { useState, useEffect, useRef } from 'react';
import config from '../../config';
import Header from '../../components/Headers'; // Corrected import path
import ChatInput from '../../components/Chat/ChatInput';
import ChatMessages from '../../components/Chat/ChatMessages';
import Dashboard from '../../components/Dashboard/Dashboard';
import BarGraph from '../../components/Visualizations/BarGraph';
import PieGraph from '../../components/Visualizations/PieGraph';
import DistributionGraph from '../../components/Visualizations/DistributionGraph';
import './Home.css';

function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showDashboard, setShowDashboard] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
      ]);

      const data = {
        user_input: input,
        client_number: '123',
      };

      fetch(`${config.backendUrl}/chat/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.message, sender: 'bot', item: data.visualization ? data : null },
          ]);
          if (data.visualization) {
            setSelectedItem(data);
          }
        })
        .catch((error) => console.error('Error:', error));

      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() !== '') {
      setShowDashboard(false);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDashboard(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Selected ${item.title}`, sender: 'system', item },
    ]);
  };

  const handleCloseVisualization = () => {
    setSelectedItem(null);
  };

  const renderVisualization = (item) => {
    return (
      <div className="chat-message bot">
        <div className="chat-bubble bot">
          {item.type === 'bar-chart' && <BarGraph data={item.values} categories={item.categories} title={item.title} />}
          {item.type === 'pie-chart' && <PieGraph data={item.values} />}
          {item.type === 'distribution' && <DistributionGraph data={item.values} />}
          {item.type !== 'bar-chart' && item.type !== 'pie-chart' && item.type !== 'distribution' && <div>{item.message}</div>}
          <button className="close-button" onClick={handleCloseVisualization}>X</button>
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      <Header />
      <div className="chat-container" style={{ overflow: 'hidden' }}>
        {showDashboard ? (
          <Dashboard 
            items={[
              { title: 'Item 1', description: 'Description 1', type: 'bar', data: [1, 2, 3] },
              { title: 'Item 2', description: 'Description 2', type: 'pie', data: [4, 5, 6] },
              { title: 'Item 3', description: 'Description 3', type: 'distribution', data: [7, 8, 9] }
            ]} 
            handleItemClick={handleItemClick} 
          />
        ) : (
          <>
            <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
            {selectedItem && renderVisualization(selectedItem)}
          </>
        )}
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          handleSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Home;