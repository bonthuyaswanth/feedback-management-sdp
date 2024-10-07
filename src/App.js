import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import ContactPage from './ContactPage';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard'; // Import Admin Dashboard
import FacultyDashboard from './FacultyDashboard'; // Import Faculty Dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
