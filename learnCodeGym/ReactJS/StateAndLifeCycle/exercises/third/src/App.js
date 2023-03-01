import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';

export default function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isRemember: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleChangeCheckbox = () => {
    setForm((prevForm) => ({ ...prevForm, isRemember: !prevForm.isRemember }));
  };

  const checkValidForm = () => {
    const { email, password } = form;
    const value = email && password;
    setIsValid(value);
  };

  const handleSubmit = () => {
    checkValidForm();
    if (isValid) {
      setIsLoggedIn(true);
    }
  };
  

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  
  if (isLoggedIn) return <Home onLogOut={handleLogOut} />;
  return(
    <SignIn
      form={form} 
      handleChange={handleChange} 
      handleChangeCheckbox={handleChangeCheckbox}
      handleSubmit={handleSubmit}
    />  
  ) 
}
