import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList';
import BookCreator from './pages/BookCreator';
import BookDetails from './pages/BookDetails';

function App() {
  return(
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path={"/book/add"} element={<BookCreator />} />
      <Route path={`/books/:bookId`} element={<BookDetails />} />
    </Routes>
  )
}

export default App;
