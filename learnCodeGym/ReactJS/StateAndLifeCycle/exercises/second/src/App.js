import { useState } from 'react';
import './App.css';
import Calculator from './components/calculator';

export default function App() {
  const [numFirst, setNumFirst] = useState(0);
  const [numSecond, setNumSecond] = useState(0);
  const [result, setResult] = useState();
  const [operation, setOperation] = useState("+");

  const handleInput = () => {
    setNumFirst(Number(document.getElementById('inputNum-first').value));
    setNumSecond(Number(document.getElementById('inputNum-second').value));
  }

  const handleCalculate = () => {
    handleInput();
    switch (operation) {
      case "+":
        setResult(numFirst + numSecond);
        break;
      case "-":
        setResult(numFirst - numSecond);
        break;
      case "*":
        setResult(numFirst * numSecond);
        break;
      case "/":
        setResult(numFirst / numSecond);
        break;
      default:
        setResult(0);
    }
  }

  const clearAll = () => {
    document.getElementById('inputNum-first').value = '';
    document.getElementById('inputNum-second').value = '';
    document.getElementById('result').innerHTML = '';
  }
  return (
    <>
      <Calculator
        num={handleInput}
        cal={handleCalculate}
        result={result}
        setOperation={setOperation}
        clear={clearAll}
      />
    </>
  );
}
