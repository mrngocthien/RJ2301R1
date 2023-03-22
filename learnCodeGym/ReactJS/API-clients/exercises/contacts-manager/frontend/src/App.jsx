import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacts';
import AddNewContact from './pages/AddNewContact';
import ContactDetails from './pages/ContactDetails';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path={"/contacts/add"} element={<AddNewContact />} />
      <Route path={`/contacts/:contactId`} element={<ContactDetails />} />
    </Routes>
  )
}

export default App;
