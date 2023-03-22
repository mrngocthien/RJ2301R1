import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddNewContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", image: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileSelected = (event) => { 
    setFileSelected(event.target.files[0]);
  }

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      let image = "";
      if (fileSelected) {
        const reader = new FileReader();
        reader.readAsDataURL(fileSelected);
        reader.onloadend = () => {
          image = reader.result;
          createContact(image);
        };
      } else {
        createContact(image);
      }
    } catch (error) {
      console.error(error);
      alert(`Error creating contact: ${error.message}`);
    }
  };

  const createContact = async (image) => {
    const newContact = {
      name: formData.name,
      email: formData.email,
      image,
      phone: formData.phone
    };
    try {
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
      <h1>New Contact</h1>
      <form>
        <div>
          <img 
            src=""
            alt="" 
            style={{width: "50px", borderRadius: "50%", marginRight: "10px"}}
          />
          <input
            type="file" 
            name="file"
            onChange={(e) => handleFileSelected(e)}
          />
        </div>
        <div>
          <label>Name</label><br />
          <input
            type='text'
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Phone</label><br />
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange(e)}
          />
        </div><br />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  )
}

export default AddNewContact;
