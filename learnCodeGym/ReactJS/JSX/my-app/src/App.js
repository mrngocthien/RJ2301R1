import logo from './logo.svg';
import './App.css';
import ShowName from './components/ShowName';
import GetFruits from './components/FruitsLister';
import Tick from './components/ShowTime';


function App() {
  return (
    <>
      <ShowName />
      <GetFruits />
      <Tick />
    </>
  );
}

export default App;
