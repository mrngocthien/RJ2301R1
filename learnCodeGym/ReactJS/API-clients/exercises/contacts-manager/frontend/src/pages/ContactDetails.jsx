import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
    const { contactId } = useParams();
    const [contacts, setContacts] = useState({});
    const [fileSelected, setFileSelected] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getContact = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`http://localhost:3000/contacts/${contactId}`);
            if (res.data.status === 1) {
            setContacts(res.data.data);
            }
        } catch (error) {
            console.error(error);
            alert(`Error fetching contact: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
        };
        if (contactId) {
        getContact();
        }
    }, [contactId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContacts((prevContacts) => ({
        ...prevContacts,
        [name]: value,
        }));
        
    };

    const handleFileSelected = (event) => { 
        setFileSelected(event.target.files[0]);
    }

    const updateContact = async (image) => {
        const newContact = {
            id: contactId,
          name: contacts.name,
          email: contacts.email,
          image,
          phone: contacts.phone
        };
        try {
          const res = await axios.put(`http://localhost:3000/contacts/${contactId}`, newContact);
          if (res.data.status === 1) {
            alert(`Create ${contacts.name} ${JSON.stringify(res.data.data)} successfully!!!`);
            navigate('/');
          }
        } catch (error) {
          console.error(error);
          alert(`Error creating contact: ${error.message}`);
        } finally {
          setIsLoading(false);
        }
    };
    
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
          let image = "";
          if (fileSelected) {
            const reader = new FileReader();
            reader.readAsDataURL(fileSelected);
            reader.onloadend = () => {
              image = reader.result;
              updateContact(image);
            };
          } else {
            updateContact(image);
          }
        } catch (error) {
          console.error(error);
          alert(`Error creating contact: ${error.message}`);
        }
      };

    if (!contacts || isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h1>Contact details</h1>
            <form onSubmit={handleSubmit}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img
                    src={contacts.image}
                    alt="avatar"
                    style={{width: "50px", borderRadius: "50%", marginRight: "10px"}}
                    />
                    <input type="file" name="" id="image" onChange={(e) => (handleFileSelected(e))}/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input name="name" defaultValue={contacts.name} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input name="email" defaultValue={contacts.email} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input type="number" name="phone" defaultValue={contacts.phone} onChange={(e) => handleChange(e)} />
                </div>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};
        
    export default ContactDetails;
