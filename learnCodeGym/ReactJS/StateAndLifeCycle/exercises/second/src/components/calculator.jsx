import React from "react";

export default function Calculator({ num, cal, result, setOperation, clear }) {
  return (
    <div className="container">
      <h1>My Calculator</h1>
      <div className="inputNum">
        <input type="number" id="inputNum-first" onChange={num} />
        <input type="number" id="inputNum-second" onChange={num} />
      </div>
      <h3>
        Result: <span id="result">{result}</span>
      </h3>
      <div className="btn">
        <button id="plus-btn" onClick={() => setOperation("+")}>
          +
        </button>
        <button id="minus-btn" onClick={() => setOperation("-")}>
          -
        </button>
        <button id="multi-btn" onClick={() => setOperation("*")}>
          x
        </button>
        <button id="devine-btn" onClick={() => setOperation("/")}>
          /
        </button>
      </div>
      <button id="btn-cal" onClick={cal}>Calculate</button>
      <button id="btn-clear" onClick={clear}>Clear all</button>
    </div>
  );
}