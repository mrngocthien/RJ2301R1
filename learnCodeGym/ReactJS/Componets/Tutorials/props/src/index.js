import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import reportWebVitals from './reportWebVitals';

// const headerProp = "Header from props...";
// const contentProp = "Content from props...";

// const article = {
//   headerProp: "Header from props...",
//   contentProp: "Content from props..."
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>);

// root.render(
//   <React.StrictMode>
//     <App headerProp = {headerProp} contentProp = {contentProp}/>
//   </React.StrictMode>
// );

// root.render(<App article={article} />);

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
