import React, {useState} from "react";
import { useFormik} from "formik";
import BookRegisterDTO from "../dto/BookRegisterDTO";

export default function BookRegistrationForm() {
  const [books, setBooks] = useState([]);
  const [indexSelected, setIndexSelected] = useState(-1);
  const [isUpdateShown, setIsUpdateShown] = useState(false);
  const {errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {
      title: '',
      number: ''
    },
    validationSchema: BookRegisterDTO,
    onSubmit: (values) => {
      console.log(values)
      const newBooks = JSON.parse(JSON.stringify(books));
      if (indexSelected > -1) {
        newBooks.splice(indexSelected, 1, values)
      } else {
        newBooks.push(values)
      }
      setBooks(newBooks);
      setIndexSelected(-1);
      setIsUpdateShown(false);
    },
    validateOnChange: false,
  });

  const handleSelect = (book, index) => {
    setIndexSelected(index);
    setIsUpdateShown(true);
  };
  
  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>book register</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={values.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input type="number" name="number" value={values.number} onChange={handleChange} />
          {errors.number && <span className="error">{errors.number}</span>}
        </div>
        {isUpdateShown ? <button onClick={handleSubmit}>Update</button> : <button type="submit" onClick={handleSubmit}>Submit</button>}
      </form>
      <h1>books list</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td><button onClick={() => handleSelect(book, index)}>Edit</button></td>
              <td><button onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


