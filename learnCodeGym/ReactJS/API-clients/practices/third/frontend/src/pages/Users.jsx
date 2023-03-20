import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [data, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(false) 
    const navigate = useNavigate();
  
    useEffect(() => {
      async function getPosts() {
        setLoading(true)
        const res = await axios.get('http://localhost:3000/users')
        if (res.data.status === 1) { 
          const data = res.data.data
          setLoading(false)
          setData(data)
        }
      }
  
      getPosts()
    }, [])
  
    const handleCreate = () => { 
      navigate('/user/add')
     }
    if (isLoading) { 
      return <p>Loading...</p>
    }
  
    return (
      <>
        <h1>Users</h1>
        {data.map(item => 
          <div key={item.id}>
            <a href={`/user/${item.id}`}>{ item.name }</a>
          </div>
        )}
        <br/>
        <button onClick={handleCreate}>Create</button>
      </>
    );
}

export default Users