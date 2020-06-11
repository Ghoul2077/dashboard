import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboardMain';


function App() {
  return (
    <div  className="container-fluid">
      <Sidebar />
        <div id="main">
          <Navbar />
          <Dashboard />
        </div>
    </div>
  );
}

export default App;
