import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Student'); // Default to 'Student'

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      role: event.target[4].value, // Role selected
    };
    // Process signup data (you can add API call logic here)
    console.log(formData); // Log formData for debugging purposes
    navigate('/signin'); // Redirect to signin page after successful signup
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg"
            alt="Signup Illustration"
            className="signup-illustration"
          />
        </div>
        <div className="signup-right">
          <h2>Join Us!</h2>
          <p>Sign up to start giving feedback.</p>
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Password" required />
            {/* Role Dropdown */}
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="Admin">Admin</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/signin">Sign In</Link></p>
          <button className="back-btn" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
