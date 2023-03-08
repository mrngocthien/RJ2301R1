import './App.css';
import LoginForm from './components/LoginForm';
import React, { useState } from 'react';
import Home from './components/Home';

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    const {username, password} = formValues;
    event.preventDefault();
    
    if (username === 'thiengeneral1@gmail.com' && password === 'ngocthien') {
      setIsShown(true); // Submit form data
    } else if (!username || !password) {
      alert('Missing Parameter!')
    } else if (username !== 'thiengeneral1@gmail.com') {
      alert('Wrong username')
    } else {
      alert('Wrong password')
    }
    setFormValues((prevValues) => ({...prevValues, username:'', password:''}));
  }; 

  const handleLogout = () => {
    setIsShown(false);
  }
  return (
    <>
      {
        isShown ?
          <Home handleLogout={handleLogout} /> 
        : 
          <LoginForm 
            formValues={formValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
      }
    </>
  );
}
