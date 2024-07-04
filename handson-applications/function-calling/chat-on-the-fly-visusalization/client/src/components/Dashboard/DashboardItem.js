import React from 'react';

function DashboardItem({ item, onClick }) {
  return (
    <div className="dashboard-item" onClick={onClick}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default DashboardItem;