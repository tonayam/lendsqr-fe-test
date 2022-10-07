import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashBody from "../components/DashBody";

const Dashboard = () => {
  return (
    <main className='dashboard'>
      <Navbar />
      <div className='sidebar-body-container'>
        <Sidebar />
        <DashBody />
      </div>
    </main>
  );
};

export default Dashboard;
