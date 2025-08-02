// Login.js
import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!name.trim()) return alert('Please enter your name');
    setLoading(true);

    // Simulate 2-second delay and store name in localStorage
    setTimeout(() => {
      localStorage.setItem("internName", name.trim());
      localStorage.setItem("loginTime", Date.now().toString());
      localStorage.setItem("showConfetti", "true");
    onLogin(name.trim());
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-box animated-border">
        <h1 className="typing-heading">Intern Portal Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="login-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin} disabled={loading}>
          {loading ? <span className="loader"></span> : 'Login 🚀'}
        </button>
      </div>
    </div>
  );
}

export default Login;


