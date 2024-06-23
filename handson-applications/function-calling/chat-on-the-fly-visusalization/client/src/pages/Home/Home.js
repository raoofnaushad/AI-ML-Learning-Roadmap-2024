// src/pages/Home/Home.js
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import config from '../../config';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './Home.css';

function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      // Add user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
      ]);
  
      const data = {
        user_input: input,
        client_number: '123', // replace 'default' with the actual default value
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
          // Add bot's message to the chat
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.message, sender: 'bot', data: data.visualization ? data : null },
          ]);
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

  const renderGraph = (graphData) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56'];

    switch (graphData.type) {
      case 'bar-chart':
        return (
          <div className="bar-graph">
            <h2>{graphData.title}</h2> {/* Add title */}
            <BarChart width={600} height={300} data={graphData.categories.map((category, index) => ({ category, value: graphData.values[index] }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        );
      case 'pie-chart':
        return (
          <div className="pie-chart">
            <h2>{graphData.title}</h2> {/* Add title */}
            <PieChart width={400} height={400}>
              <Pie
                data={graphData.categories.map((category, index) => ({ category, value: graphData.values[index] }))}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >
                {graphData.categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        );
      // Placeholder for other graph types
      default:
        return <div>Graph type {graphData.type} is not supported yet.</div>;
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <div className={`chat-bubble ${message.sender}`}>
                {message.text}
              </div>
              {message.data && renderGraph(message.data)}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Home;