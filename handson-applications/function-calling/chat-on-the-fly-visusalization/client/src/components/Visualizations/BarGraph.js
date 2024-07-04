import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './BarGraph.css'; // Import the CSS file for styling

// Register all necessary components
Chart.register(...registerables);

function BarGraph({ data, categories, title }) {
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
    <div className="bar-graph">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarGraph;