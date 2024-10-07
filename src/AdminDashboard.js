import React from 'react';
import './AdminDashboard.css'; // Create this file to style the dashboard

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You can manage users, courses, and feedback here.</p>
      
      <div className="admin-actions">
        <button className="action-btn">Manage Users</button>
        <button className="action-btn">Manage Courses</button>
        <button className="action-btn">View Feedback Reports</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
