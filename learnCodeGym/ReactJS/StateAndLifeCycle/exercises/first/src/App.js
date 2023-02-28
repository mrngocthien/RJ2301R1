import './App.css';
import { useState } from "react"
import Collapse from './components/Collapse';
import Expand from './components/Expand';


function App() {
  const [Showed, setShowed] = useState(false)

  const handleShow = () => {
    setShowed(true)
  }
  const handleHidden = () => {
    setShowed(false)
  }
  return (
    <>
      {Showed ? <Collapse collapsed={handleHidden} /> :  <Expand expanded={handleShow} />}
    </>
  );
}

export default App;
