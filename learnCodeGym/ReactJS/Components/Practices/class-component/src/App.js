import logo from './logo.svg';
import './App.css';
import AddComponent from './components/AddComponent';
import ShowName from './components/ShowName';

function App() {
    return (
        // <AddComponent firstNumber={1} secondNumber={2} />
        <ShowName firstName='Ngoc' lastName='Thien'/>
    );
}
export default App;
