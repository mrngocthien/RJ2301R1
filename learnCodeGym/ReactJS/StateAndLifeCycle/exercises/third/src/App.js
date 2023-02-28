import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Login from './components/Login';

export default function App() {
  const [form, setForm] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (event) => {
    this.setState((state) => {
      const { form } = state
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkValidForm())
  }
  
  const handleChangeCheckbox = () => {
    this.setState((state) => {
      const { form } = state
      form.isRemember = !form.isRemember
      return { form }
    }, () => this.checkValidForm())
  }
 
  const checkValidForm = () => {
    const { email, password } = this.state.form
    const value = email && password
    this.setState({ isValid: value })
  }
 
  const handleSubmit = () => {
    if (this.state.isValid){
      setIsLoggedIn(true)
    }
  }
 
  const handleLogOut = () => {
    setIsLoggedIn(false)
  }
  return (
    // <Home />
    <Login />
  );
}
