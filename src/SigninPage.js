import React, { useState } from 'react';
import './SigninPage.css';
import { useNavigate, Link } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Student'); // Default to 'Student'

  const handleSigninSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      role: event.target[2].value, // Role selected
    };

    // Process signin data (API call logic can go here)
    console.log(formData); // Log formData for debugging purposes

    // Redirect based on the selected role
    if (formData.role === 'Student') {
      navigate('/student-dashboard');
    } else if (formData.role === 'Admin') {
      navigate('/admin-dashboard');
    } else if (formData.role === 'Faculty') {
      navigate('/faculty-dashboard');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-left">
          <img
            src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=
"
            alt="Signin Illustration"
            className="signin-illustration"
          />
        </div>
        <div className="signin-right">
          <h2>Welcome Back!</h2>
          <p>Sign in to access your account and continue managing feedback.</p>
          <form className="signin-form" onSubmit={handleSigninSubmit}>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Password" required />
            {/* Role Dropdown */}
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="Admin">Admin</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
            <button type="submit" className="signin-btn">Sign In</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <button className="back-btn" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
