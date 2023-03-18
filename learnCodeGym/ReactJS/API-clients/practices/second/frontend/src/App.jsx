import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
import React from 'react'

function App() {

  const [data, setData] = React.useState([])

  const [isLoading, setLoading] = React.useState(false) 

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

  if (isLoading) { 
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data.map(item => <li key={item.id}>{ item.name }</li>)}
    </ul>
  );
}

export default App;
