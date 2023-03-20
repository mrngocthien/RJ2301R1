import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = React.useState(false) 

    useEffect(() => { 
        if (userId) {
            async function getPost() {
                setLoading(true)
                const res = await axios.get(`http://localhost:3000/users/${userId}`)
                if (res.data.status === 1) { 
                    const data = res.data.data
                    setLoading(false)
                    setUser(data)
                }
            }
            getPost();    
        }

    }, [userId]);

    const handleChange = (event) => { 
        const { name, value } = event.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        );
    }

    const handleUpdate = async () => {
        try {
            const updatedUser = {
                id: user.id,
                name: user.name,
                birthday: user.birthday
            };
            const res = await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
            if (res.data.status === 1) {
                alert(
                    `Update user ${JSON.stringify(
                    res.data.data
                    )} successfully!!!`
                );
            }
        } catch (error) {
            console.error(error);
            alert(`Error updating user: ${error.message}`);
        }
    };
      

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/users/${user.id}`);
            if (res.data.status === 1) {
                alert(`User deleted successfully!!!`);
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    if (isLoading) { 
        return <p>Loading...</p>
    }
      
    return (
        <div>
            <h1>User details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={user.birthday || ''}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleUpdate}>
                Update
                </button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default UserDetails