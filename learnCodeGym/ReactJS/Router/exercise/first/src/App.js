import React, { useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Kiểm tra account và password
    if (email === 'admin@gmail.com' && password === 'letmein') {
      setLoggedIn(true);
      setUser({ email });
      console.log('Logged In');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <Routes>

      <Route path="/login" element={loggedIn ? 
        <Navigate to="/" /> : 
        <Login onLogin={handleLogin} />} />
  
      <Route path="/" element={loggedIn ? 
        <Home user={user} onLogout={handleLogout} /> : 
        <Navigate to="/login" />} /> 

    </Routes>
  );
}
