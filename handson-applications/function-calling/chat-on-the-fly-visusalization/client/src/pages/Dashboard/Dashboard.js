import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import Sidebar from '../../components/Sidebar/Sidebar';


const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Customer Transactions',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <h2>Customer Transaction Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;
