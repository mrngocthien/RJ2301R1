import './App.css';
import StudentTable from './components/StudentList';


function App() {
  const student = [
    { id: 1, name: "Nguyen van A", age: "24", city: "Hue" },
    { id: 2, name: "Nguyen van B", age: "25", city: "Sai Gon" },
    { id: 3, name: "Nguyen van C", age: "26", city: "Ha Noi" },
    { id: 4, name: "Nguyen van D", age: "27", city: "Da Nang" }
  ];

  return (
    <div>
      <StudentTable student={student} />
    </div>
  );
}

export default App;
