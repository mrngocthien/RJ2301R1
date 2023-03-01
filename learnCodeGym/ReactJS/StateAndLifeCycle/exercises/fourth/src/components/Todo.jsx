import React from "react";

export default function Todo({ list, addItem, inputValue }) {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form">
        <input type="text" id="inputText" onChange={inputValue} />
        <button onClick={addItem}>Add</button>
      </div>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}