// src/pages/Home/Home.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import config from '../../config';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './Home.css';

function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [dashboardData, setDashboardData] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch initial dashboard data
    fetch(`${config.backendUrl}/dashboard?id=123`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setDashboardData(data.data);
        }
      })
      .catch((error) => console.error('Error fetching dashboard data:', error));
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response.', sender: 'bot' },
        ]);
      }, 1000);
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
      case 'bar-graph':
        return (
          <div className="bar-graph">
            <h3>{graphData.title}</h3>
            <BarChart width={600} height={300} data={graphData.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        );
      case 'pie-graph':
        return (
          <div className="pie-graph">
            <h3>{graphData.title}</h3>
            <PieChart width={400} height={400}>
              <Pie
                data={graphData.data}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >
                {graphData.data.map((entry, index) => (
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
          {dashboardData && dashboardData.map((graphData, index) => (
            <div key={index} className="chat-message bot">
              {renderGraph(graphData)}
            </div>
          ))}
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <div className={`chat-bubble ${message.sender}`}>
                {message.text}
              </div>
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
