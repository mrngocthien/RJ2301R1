import { useState, useEffect } from "react"; 

export default function CovidList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
          {data.map((item, index) => {
            return(
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Recovered}</td>
                <td>{item.Deaths}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  );
}

async function getData() {
  try {
    const res = await fetch("https://api.covid19api.com/total/country/vietnam");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}