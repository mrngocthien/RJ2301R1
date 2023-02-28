import logo from './logo.svg';
import './App.css';
import AddComponent from './components/AddComponent';
import ShowName from './components/ShowName';
import CheckNumber from './components/CheckNumber';

function App() {
    return (
        // <AddComponent firstNumber={1} secondNumber={2} />
        <>
            <ShowName firstName='Ngoc' lastName='Thien'/>
            <CheckNumber number={4}></CheckNumber>
        </>
    );
}
export default App;
