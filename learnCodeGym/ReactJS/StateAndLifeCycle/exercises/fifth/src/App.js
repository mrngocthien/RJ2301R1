import { useState } from "react";
import StudentsList from "./components/StudentsList";


export default function App() {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [indexSelected, setIndexSelected] = useState(-1);
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    setForm((prevForm) => ({ ...prevForm, [event.target.name]: event.target.value }));
  }

  function handleSelect(studentSelected, index) {
    setForm(studentSelected);
    setIndexSelected(index);
  }

  function checkInvalidForm() {
    const { name, phone, email } = form;
    const value = name && phone && email;
    setIsValid(value);
    
  }

  function handleSubmit() {
    checkInvalidForm();
    if (isValid) {
      const newList = [...studentList];
      if (indexSelected > -1) {
        newList[indexSelected] = form;
      } else {
        newList.push(form);
      }
      setStudentList(newList);
      setForm({ name: '', phone: '', email: '' });
      setIndexSelected(-1);
      setIsValid(false);
    }
  }

  function handleDelete(index) {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  }

  return (
    <StudentsList
      studentList={studentList}
      form={form}
      handleChange={handleChange}
      handleSelect={handleSelect}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
}

