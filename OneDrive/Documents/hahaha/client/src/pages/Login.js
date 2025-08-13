import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyCredentials, addUser } from '../utils/auth';

function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
      if (!formData.email.includes('@')) {
        setError('Please enter a valid email address');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    
    try {
      if (isSignup) {
        // Handle signup
        addUser(formData.username, formData.password, formData.email);
        onLogin();
        navigate('/');
      } else {
        // Handle login
        const user = verifyCredentials(formData.username, formData.password);
        if (user) {
          onLogin();
          navigate('/');
        } else {
          setError('Invalid username or password');
        }
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError(err.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="celestial-bg">
      <div className="login-container celestial-glow">
        <div className="login-logo">CELESTIAL</div>
        <h2 className="login-title">{isSignup ? 'Join the Cloud' : 'Access the Cloud'}</h2>
        
        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${!isSignup ? 'active' : ''}`}
            onClick={() => setIsSignup(false)}
            type="button"
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${isSignup ? 'active' : ''}`}
            onClick={() => setIsSignup(true)}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <form className="celestial-form" onSubmit={handleSubmit}>
          {error && <div className="login-error">{error}</div>}
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          
          {isSignup && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          )}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          )}
          
          <button 
            className={`celestial-btn login-btn ${isLoading ? 'loading' : ''}`} 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : (isSignup ? 'Create Account' : 'Enter the Cloud')}
          </button>
        </form>

        {!isSignup && (
          <div className="login-demo">
            <strong>Username:</strong> Demo
            <br />
            <strong>Password:</strong> Demo123
          </div>
        )}

        {isSignup && (
          <div className="signup-terms">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </div>
        )}
      </div>
      <div className="celestial-stars"></div>
    </div>
  );
}

export default Login;
