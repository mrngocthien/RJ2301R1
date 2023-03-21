import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = React.useState([])
    const [isLoading, setLoading] = React.useState(false) 
    const [isBookDeleted, setIsBookDeleted] = React.useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      async function getPosts() {
        setLoading(true)
        const res = await axios.get('http://localhost:3000/books')
        if (res.data.status === 1) { 
          const data = res.data.data
          setLoading(false)
          setBooks(data)
        }
      }
    
      getPosts()
    }, [isBookDeleted])
    
    const handleCreate = () => { 
      navigate('/book/add')
     }
    if (isLoading) { 
      return <p>Loading...</p>
    }
  
    const handleDelete = async (bookId) => {
      try {
          const res = await axios.delete(`http://localhost:3000/books/${bookId}`);
          if (res.data.status === 1) {
              alert(`Book deleted successfully!!!`);
              setIsBookDeleted(true);
              setBooks(books.filter(book => book.id !== bookId));
          }
      } catch (error) {
          console.error(error);
      }
    };

    const handleEdit = (bookId) => {
      navigate(`/books/${bookId}`);
      console.log(bookId)
    }

    return (
      <div className='container'>
        <div className='header'>
          <h1>Library</h1>
          <button onClick={handleCreate}>Add a new Book</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item => 
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.quantity}</td>
              <td>
                <button className='edit' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='del' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default BookList