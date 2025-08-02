import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleLogin = (name) => {
    setUserName(name);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserName('');
    setView('dashboard');
  };

  if (!loggedIn) return <Login onLogin={handleLogin} />;

  return (
    <>
      <nav className="navbar">
        <button className="nav-btn" onClick={() => setView('dashboard')}>
          Dashboard
        </button>
        <button className="nav-btn" onClick={() => setView('leaderboard')}>
          Leaderboard
        </button>
        <button className="nav-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button className="nav-btn logout-btn" onClick={handleLogout}>
          📕 Logout
        </button>
      </nav>

      {view === 'dashboard' ? (
        <Dashboard name={userName} />
      ) : (
        <Leaderboard />
      )}
    </>
  );
}

export default App;

