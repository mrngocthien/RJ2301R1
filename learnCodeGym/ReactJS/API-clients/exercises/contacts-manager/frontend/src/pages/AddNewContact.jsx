import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddNewContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", image: "", phone: "" });
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
      const newContact = {
        name: formData.name,
        email: formData.email,
        image: formData.image,
        phone: formData.phone
      };
      const res = await axios.post(`http://localhost:3000/contacts`, newContact);
      if (res.data.status === 1) {
        alert(`Create ${formData.name} ${JSON.stringify(res.data.data)} successfully!!!`);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      alert(`Error creating contact: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Contact creator</h1>
      <form>
        <div>
          <img 
            src=""
            alt="" 
            style={{width: "50px", borderRadius: "50%", marginRight: "10px"}}
          />
          <button 
            style={{padding: "5px", borderRadius: "10px", background: "#2297f0", color: "#ffff"}}
          >
            Add Image
          </button>
        </div>
        <div>
          <label>Name</label><br />
          <input
            type='text'
            name="name"
            value={formData.name}
            onChange={handleChange} />
        </div>
        <div>
          <label>email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label><br />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div><br />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  )
}

export default AddNewContact
