import React from 'react';
import DashboardItem from './DashboardItem';

function Dashboard({ items, handleItemClick }) {
  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <DashboardItem key={index} item={item} onClick={() => handleItemClick(item)} />
      ))}
    </div>
  );
}

export default Dashboard;