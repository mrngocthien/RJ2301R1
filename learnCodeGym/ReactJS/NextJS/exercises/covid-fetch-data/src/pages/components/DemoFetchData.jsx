import { useState, useEffect } from "react"; 

export default function demoFetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await loadPosts();
      setData(result);
    }

    fetchData();
  }, []);
  return (
    <ul>
      {data.map((post) => {
        return (
          <li>{post.title}</li>
        )
      })}
    </ul>
  )
}

export async function loadPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
  }
}