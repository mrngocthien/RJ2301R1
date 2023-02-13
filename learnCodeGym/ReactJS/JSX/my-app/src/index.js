import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Ho Ngoc Thien';
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry"
];
const showName = () => {
  return (
    <h1 style = {{textAlign: 'center'}}>{name}</h1>
  );
};

const getFruits = () => {
  return (
    <div>
      <h1>List of fruits</h1>
      <ul>
        { fruits.map((item) => (
          <li>{ item }</li>
        )) }
      </ul>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(showName());
root.render(getFruits());

const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
