import React from "react";

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry"
];

const GetFruits = () => {
      return (
        <div>
          <h1>List of fruits</h1>
          <ul>
            { fruits.map((item) => (
              <li key={item}>{ item }</li>
            )) }
          </ul>
        </div>
      )
}

export default GetFruits;