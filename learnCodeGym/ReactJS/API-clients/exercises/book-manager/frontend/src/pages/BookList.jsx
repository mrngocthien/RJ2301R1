import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = React.useState([])
    const [isLoading, setLoading] = React.useState(false) 
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
    }, [])
  
    const handleCreate = () => { 
      navigate('/book/add')
     }
    if (isLoading) { 
      return <p>Loading...</p>
    }
  
    const handleDelete = async () => {
      try {
          const res = await axios.delete(`http://localhost:3000/books/${books.id}`);
          if (res.data.status === 1) {
              alert(`Book deleted successfully!!!`);
          }
      } catch (error) {
          console.error(error);
      }
    };

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
              <td><a href={`/books/${item.id}`}>{ item.title }</a></td>
              <td>{item.author}</td>
              <td>{item.quantity}</td>
              <td>
                <a href={`/books/${item.id}`}><button className='edit'>Edit</button></a>
                <button className='del' onClick={handleDelete}>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default BookList