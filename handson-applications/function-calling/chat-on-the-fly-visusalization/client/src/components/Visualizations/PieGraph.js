import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DistributionGraph.css'; // Import the CSS file for styling

function DistributionGraph({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (Array.isArray(data.data) ? data.data.length : 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (Array.isArray(data.data) ? data.data.length : 1)) % (Array.isArray(data.data) ? data.data.length : 1));
  };

  const currentItem = Array.isArray(data.data) ? data.data[currentIndex] : null;

  return (
    <div className="distribution-graph">
      <h3>{data.title}</h3>
      <div className="navigation">
        <button className="nav-button" onClick={handlePrev}>&lt; Prev</button>
        {currentItem ? (
          <div className="category-details">
            <h4>{currentItem.category}</h4>
            <div className="box-plot">
              <div className="box">
                <div className="whisker min">
                  <span>Min: {currentItem.group_min}</span>
                </div>
                <div className="avg">
                  <span>Avg: {currentItem.group_avg}</span>
                </div>
                <div className="whisker max">
                  <span>Max: {currentItem.group_max}</span>
                </div>
                <div className="client-spending" style={{ left: `${(currentItem.client_spending / currentItem.group_max) * 100}%` }}>
                  <span>Client: {currentItem.client_spending}</span>
                </div>
              </div>
            </div>
            <p>Client Spending: {currentItem.client_spending}</p>
            <p>Group Min: {currentItem.group_min}</p>
            <p>Group Max: {currentItem.group_max}</p>
            <p>Group Avg: {currentItem.group_avg}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
        <button className="nav-button" onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
}

DistributionGraph.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        client_spending: PropTypes.number.isRequired,
        group_min: PropTypes.number.isRequired,
        group_max: PropTypes.number.isRequired,
        group_avg: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DistributionGraph;