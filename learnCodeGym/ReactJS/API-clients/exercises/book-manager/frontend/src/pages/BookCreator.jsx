import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BookCreator = () => {
  const [formData, setFormData] = useState({ title: "", author: "", quantity: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const newBook = {
        title: formData.title,
        author: formData.author,
        quantity: Number(formData.quantity)
      };
      const res = await axios.post(`http://localhost:3000/books`, newBook);
      if (res.data.status === 1) {
        alert(`Create ${formData.title} ${JSON.stringify(res.data.data)} successfully!!!`);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert(`Error creating book: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

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
            value={formData.title}
            onChange={handleChange} />
        </div>
        <div>
          <label>Author</label><br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label><br />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
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
