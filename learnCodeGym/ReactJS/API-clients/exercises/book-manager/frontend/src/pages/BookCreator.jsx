import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BookCreator = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState({});
    const [isLoading, setLoading] = React.useState(false) 
    const navigate = useNavigate();
    console.log(bookId)

    useEffect(() => { 
        if (bookId) {
            async function getPost() {
                setLoading(true)
                const res = await axios.get(`http://localhost:3000/users/${bookId}`)
                if (res.data.status === 1) { 
                    const data = res.data.data
                    setLoading(false)
                    setBooks(data)
                }
            }
            getPost();    
        }

    }, [bookId]);

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setBooks(
            {
                ...books,
                [name]: value
            }
        );
    }

    const handleSubmit = async () => { 
        try {
            const newBook = {
                title: books.title,
                author: books.author,
                quantity: books.quantity
              };
              const res = await axios.post(`http://localhost:3000/books`, newBook);
              if (res.data.status === 1) {
                alert(`Create ${books.title} ${JSON.stringify(res.data.data)} successfully!!!`)
                navigate('/')
            }
        } catch (error) {
            console.error(error);
            alert(`Error creating book: ${error.message}`);
        }
    }
    if (isLoading) { 
        return <p>Loading...</p>
      }
    
    return (
        <div>
            <h1>Book creator</h1>
            <form>
                <div>
                    <label>Title</label><br />
                    <input
                        type='text'
                        name="title" 
                        value={books.title || ''} 
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Author</label><br />
                    <input
                        type="text"
                        name="author"
                        value={books.author || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Quantity</label><br />
                    <input
                        type="number"
                        name="quantity"
                        value={books.quantity || ''}
                        onChange={handleChange}
                    />
                </div><br />
                <button type="button" onClick={handleSubmit}>
                Submit
                </button>
            </form>
        </div>
    )
}

export default BookCreator