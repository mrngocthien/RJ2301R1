import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  return <Todo list={list} addItem={handleAddItem} inputValue={handleChange} />;
}

