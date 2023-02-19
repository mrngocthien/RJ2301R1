import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function BookRegistrationForm() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.number) {
      errors.number = "Required";
    }
    return errors;
  };

  const errors = handleValidate(form);

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = () => {
    const newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, form);
    } else {
      newBooks.push(form);
    }
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
  };

  return (
    <div className="container">
      <Formik
        enableReinitialize={true}
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, touched, isSubmitting }) => (
          <Form>
            <h1>book register</h1>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" onChange={handleChange} />
              <ErrorMessage name="title" />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <Field type="number" name="number" onChange={handleChange} />
              <ErrorMessage name="number" />
            </div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
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


