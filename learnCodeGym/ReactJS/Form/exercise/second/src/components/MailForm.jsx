import React, { useState } from 'react';
import { Formik } from 'formik';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

export default function ContactForm() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "file") {
          setFile(event.target.files[0]);
          setForm((prevForm) => ({ ...prevForm, [name]: event.target.files[0] }));
        } else {
          setForm((prevForm) => ({ ...prevForm, [name]: value }));
        }
    };

    const handleValidate = (values) => {
        const newErrors = {};

        if (!values.email) {
        newErrors.email = 'Required';
        } else if (!REGEX.email.test(values.email)) {
        newErrors.email = 'Invalid email address';
        }

        if (!values.title) {
        newErrors.title = 'Required';
        }

        if (!values.message) {
            newErrors.message = 'Required';
        }

        if (!values.file) {
            newErrors.file = 'Required';
        }

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = () => {
        alert('Sent successfully!!!');
        resetForm();
    };

    const resetForm = () => {
        setForm({});
        setFile(null);
        setErrors({});
    };

    return (
        <div className="container">
            <h1>mail form</h1>
            <Formik
                enableReinitialize={true}
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, handleSubmit, isSubmitting }) => (
                    
                <form onSubmit={handleSubmit}>
                    <label>
                    To:
                        <input type="email" name="email" value={values.email || ''} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </label>
                    <label>
                    Title:
                        <input type="text" name="title" value={values.title || ''} onChange={handleChange} />
                        {errors.title && <span className="error">{errors.title}</span>}
                    </label>
                    <label>
                    Message:<br/>
                        <textarea type="text" cols={49} rows={4} name="message" value={values.message || ''} onChange={handleChange} />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </label>
                    <label>
                    Choose file:
                        <input type="file" name='file' onChange={handleChange} />
                        {errors.file && <span className="error">{errors.file}</span>}
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                    Submit
                    </button>
                </form>
                )}
            </Formik>
        </div>
    );
}

