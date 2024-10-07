import React, { useEffect, useState } from 'react';
import './StudentDashboard.css';

// Dummy data for the logged-in user
// You can replace this with actual API calls or state management
const loggedInStudent = {
  username: "Nitin Kumar",
  gender: "Male",
  email: "2200031839@kluniversity.in",
  password: "112233",  // Passwords should not be directly exposed in real applications
  courses: ["Mathematics", "Computer Science", "Physics"],
};

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState({});

  // You could fetch student data from an API here and set it in state
  useEffect(() => {
    // Simulating an API call to get student data
    setStudentInfo(loggedInStudent); // Replace with real data fetching
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>My Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <li><a href="#dashboard"><i className="icon-dashboard"></i>Dashboard</a></li>
          <li><a href="#settings"><i className="icon-settings"></i>Settings</a></li>
          <li><a href="#setup"><i className="icon-setup"></i>Setup</a></li>
          <li><a href="#staff-user"><i className="icon-staff-user"></i>Staff/User</a></li>
          <li><a href="#student"><i className="icon-student"></i>Student</a></li>
          <li><a href="#fee"><i className="icon-fee"></i>Feedback</a></li>
          <li><a href="#exam"><i className="icon-exam"></i>Exam</a></li>
          <li><a href="#sms"><i className="icon-sms"></i>SMS</a></li>
        </ul>
      </nav>
      
      <div className="main-content">
        <h1>Welcome to the Student Dashboard</h1>
        <p>Select an option from the menu to get started.</p>

        {/* Student Information Section */}
        <div className="student-info">
          <h2>My Dashboard</h2>
          <div className="info-container">
            <div className="info-item">
              <strong>Username:</strong> {studentInfo.username}
            </div>
            <div className="info-item">
              <strong>Gender:</strong> {studentInfo.gender}
            </div>
            <div className="info-item">
              <strong>Email:</strong> {studentInfo.email}
            </div>
            <div className="info-item">
              <strong>Password:</strong> {studentInfo.password} {/* Hide the actual password */}
            </div>
            <div className="info-item">
              <strong>Courses:</strong> 
              <ul>
                {studentInfo.courses && studentInfo.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
