import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Possibot</h1>
      <Link to="/"><button>Chat</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/dashboard"><button>Dashboard</button></Link>
    </div>
  );
}

export default Sidebar;