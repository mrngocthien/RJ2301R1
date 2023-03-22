import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
    const { contactId } = useParams();
    const [contacts, setContacts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (contactId) {
            async function getContact() {
                const res = await axios.get(`http://localhost:3000/contacts/${contactId}`);
                if (res.data.status === 1) {
                const data = res.data.data
                setContacts(data);
                }
            }
            getContact();
        }
    }, [contactId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContacts(
            {
                ...contacts,
                [name]: value
            }
        );
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updated = {
                id: contacts.id,
                name: contacts.name,
                email: contacts.email,
                image: contacts.image,
                phone: contacts.phone
            };
            const res = await axios.put(
                `http://localhost:3000/contacts/${contacts.id}`,
                updated
            );
            if (res.data.status === 1) {
                alert(
                `Update contact ${JSON.stringify(res.data.data)} successfully!!!`
                );
                navigate('/')
                
            }
        } catch (error) {
            console.error(error);
            alert(`Error updating contact: ${error.message}`);
        }
    };

    if (!contacts) {
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
                <button 
                    style={{padding: "5px", borderRadius: "10px", background: "#2297f0", color: "#ffff"}}>
                    Change Image
                </button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input name="name" defaultValue={contacts.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input name="email" defaultValue={contacts.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <br />
                <input type="number" name="phone" defaultValue={contacts.phone} onChange={handleChange} />
            </div>
            <br />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default ContactDetails;
