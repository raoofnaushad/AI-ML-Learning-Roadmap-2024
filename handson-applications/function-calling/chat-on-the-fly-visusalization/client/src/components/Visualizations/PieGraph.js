import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './PieGraph.css'; // Import the CSS file for styling

// Register all necessary components
Chart.register(...registerables);

function PieGraph({ data, categories = [], title }) { // Default categories to an empty array
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // Ensure legend is displayed
        position: 'top',
        labels: {
          color: '#000', // Ensure legend text is visible
        },
      },
      title: {
        display: true,
        text: title,
        color: '#000', // Ensure title text is visible
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += context.raw;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="pie-graph-container">
      <div className="pie-graph-title">{title}</div> {/* Title of the pie-chart */}
      <Pie data={chartData} options={options} />
      <div className="pie-graph-legend">
        {categories.map((category, index) => (
          <div key={index} className="pie-graph-legend-item">
            <div
              className="pie-graph-legend-color"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
            ></div>
            <div className="pie-graph-legend-label">{category}</div> {/* Category names */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieGraph;