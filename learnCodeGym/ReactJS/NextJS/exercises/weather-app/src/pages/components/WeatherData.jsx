import { useState, useEffect } from "react"; 

export default function WeatherData() {
const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await loadData();
      const weatherData = [result];
      console.log(weatherData)
      setData(weatherData);

    }

    fetchData();
  }, []);
  return (
    <ul>
      {data.map((item, index) => {
        return (
            <div key={index}>
              <li>City: {item.name}</li>
              <li>Time-Zone: {item.timezone}</li>
              <li>Temp: {item.main.temp}</li>
              <li>Description: {item.weather[0].description}</li>
              <li>Wind speed: {item.wind.speed}</li>
            </div>
          
        )
      })}
    </ul>
  )
}

export async function loadData() {
  const API_key = 'a133238e03b5089cbb9e1cdaa2d6e220';
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=${API_key}`);
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
  }
}