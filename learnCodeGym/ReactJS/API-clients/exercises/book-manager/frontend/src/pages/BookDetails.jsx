import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [books, setBooks] = useState({});

    useEffect(() => {
        if (bookId) {
            async function getBook() {
                const res = await axios.get(`http://localhost:3000/books/${bookId}`);
                if (res.data.status === 1) {
                const data = res.data.data
                setBooks(data);
                }
            }
            getBook();
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
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updated = {
                id: books.id,
                title: books.title,
                author: books.author,
                quantity: books.quantity
            };
            const res = await axios.put(
                `http://localhost:3000/books/${books.id}`,
                updated
            );
            if (res.data.status === 1) {
                alert(
                `Update book ${JSON.stringify(res.data.data)} successfully!!!`
                );
                navigate('/')
                
            }
        } catch (error) {
            console.error(error);
            alert(`Error updating book: ${error.message}`);
        }
    };

    if (!books) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>Book details</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Title</label>
            <br />
            <input name="title" defaultValue={books.title} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="author">Author</label>
            <br />
            <input name="author" defaultValue={books.author} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="quantity">Quantity</label>
            <br />
            <input type="number" name="quantity" defaultValue={books.quantity} onChange={handleChange} />
            </div>
            <br />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default BookDetails;
