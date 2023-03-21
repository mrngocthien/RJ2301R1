import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState({});
    console.log(bookId)

    useEffect(() => { 
        if (bookId) {
            async function getPost() {
                const res = await axios.get(`http://localhost:3000/books/${bookId}`)
                if (res.data.status === 1) { 
                    const data = res.data.data
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

    const handleUpdate = async () => {
        try {
            const updatedBook = {
                title: books.title,
                author: books.author,
                quantity: books.quantity
            };
            const res = await axios.put(`http://localhost:3000/books/${bookId}`, updatedBook);
            if (res.data.status === 1) {
                alert(
                    `Update book ${JSON.stringify(
                    res.data.data
                    )} successfully!!!`
                );
            }
        } catch (error) {
            console.error(error);
            alert(`Error updating book: ${error.message}`);
        }
    };
      
    return (
        <div>
            <h1>Book details</h1>
            <form>
                <div>
                    <label>Title</label><br />
                    <input 
                        name="title" 
                        value={books.title || ''} 
                        onChange={handleChange} />
                </div>
                <div>
                    <label>Author</label><br />
                    <input 
                        name="author" 
                        value={books.author || ''} 
                        onChange={handleChange} />
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
                <button type="button" onClick={handleUpdate}>
                Update
                </button>
            </form>
        </div>
    )
}

export default BookDetails