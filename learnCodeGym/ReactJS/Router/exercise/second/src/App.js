import React, { useState } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Login from './components/Login';
import './App.css'
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [setSelectedEmployee] = useState(null);

  const handleDetail = (employee) => {
    setSelectedEmployee(employee);
  };


  const handleLogin = (email, password) => {
    // Kiểm tra account và password
    if (email === 'admin@gmail.com' && password === 'letmein') {
      setLoggedIn(true);
      setUser({ email });
      console.log('Logged In');
    } else {
      alert('Please try again !')
    }

  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <Routes>

      <Route 
        path="/login" 
        element={loggedIn ? <Navigate to="/"/> : <Login onLogin={handleLogin} />} />
  
      <Route 
        path="/" 
        element={loggedIn ? <EmployeeList user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} /> 
      <Route
        path="/employees/:id"
        element= {<EmployeeDetail employee={handleDetail} />}
          />
    </Routes>
  );
}
