import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import UserCreator from './pages/UserCreator';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path={"/user/add"} element={<UserCreator />} />
      <Route path={`/user/:userId`} element={<UserDetails />} />
    </Routes>
  )
}

export default App;
