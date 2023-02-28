
import { useState } from 'react';
import './App.css';
import BackgroundChange from './components/BackgroundChanged';
import ClickCounter from './components/ClickCounter';
import HiddenComponent from './components/HiddenComponent';
import Home from './components/Home';
import Login from './components/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true)
  }

  const handleLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      <ClickCounter />
      <BackgroundChange />
      <HiddenComponent />
      {isLoggedIn ? <Home onLogOut={handleLogOut} /> :
        <Login onLogIn={handleLogIn} />
      }
    </>
  );
}