import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
    const { bookId } = useParams();
    const [formData, setFormData] = useState({ title: "", author: "", quantity: "" });

    useEffect(() => {
        if (bookId) {
            async function getBook() {
                const res = await axios.get(`http://localhost:3000/books/${bookId}`);
                if (res.data.status === 1) {
                setFormData(res.data.data);
                }
            }
            getBook();
        }
    }, [bookId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updated = {
                title: event.target.title.value,
                author: event.target.author.value,
                quantity: event.target.quantity.value
            };
            const res = await axios.put(
                `http://localhost:3000/books/${bookId}`,
                updated
            );
            if (res.data.status === 1) {
                alert(
                `Update book ${JSON.stringify(res.data.data)} successfully!!!`
                );
            }
        } catch (error) {
            console.error(error);
            alert(`Error updating book: ${error.message}`);
        }
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>Book details</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Title</label>
            <br />
            <input name="title" defaultValue={formData.title} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="author">Author</label>
            <br />
            <input name="author" defaultValue={formData.author} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="quantity">Quantity</label>
            <br />
            <input type="number" name="quantity" defaultValue={formData.quantity} onChange={handleChange} />
            </div>
            <br />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default BookDetails;
