import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
import React from 'react'

function App() {

  const [data, setData] = React.useState({
    userData: [],
    articlesData: []
  });
  const [isLoading, setLoading] = React.useState(false);

  useEffect(() => {
    async function getData() {
      const getUsers = axios.get('http://localhost:3000/users');
      const getArticles = axios.get('http://localhost:3000/articles');
      const [usersResponse, articlesResponse] = await axios.all([
        getUsers,
        getArticles,
      ]);

      setLoading(true);

      if (usersResponse.data.status === 1 && articlesResponse.data.status === 1) {
        const userData = usersResponse.data.data;
        const articlesData = articlesResponse.data.data;
        const data = {userData, articlesData};
        console.log(data)
        setLoading(false);
        setData(data);
      }
    }

    getData();
  }, []);

  if (isLoading) { 
    return <p>Loading...</p>
  }

  return (
    <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Article numbers</th>
            </tr>
          </thead>
          <tbody>
            {data.userData.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{data.articlesData.filter(article => article.user_id === item.id).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;
