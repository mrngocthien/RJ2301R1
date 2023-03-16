import React, { useState } from 'react';
import { useFormik } from 'formik';
import MailFormDTO from '../dto/MailFormDTO';


export default function MailForm() {
    const {errors, values, handleSubmit, handleChange} = useFormik({
        initialValues: {
          email: '',
          title: '',
          message: '',
          file: ''
        },
        validationSchema: MailFormDTO,
        onSubmit: (values) => {
          console.log(values)
        },
        validateOnChange: false,
    });

    return (
        <div className="container">
            <h1>mail form</h1>
            <form onSubmit={handleSubmit}>
                    <label>
                    To:
                        <input type="email" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </label>
                    <label>
                    Title:
                        <input type="text" name="title" value={values.title} onChange={handleChange} />
                        {errors.title && <span className="error">{errors.title}</span>}
                    </label>
                    <label>
                    Message:<br/>
                        <textarea type="text" cols={49} rows={4} name="message" value={values.message} onChange={handleChange} />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </label>
                    <label>
                    Choose file:
                        <input type="file" name='file' onChange={handleChange} />
                        {errors.file && <span className="error">{errors.file}</span>}
                    </label>
                    <button type="submit">
                    Submit
                    </button>
                </form>
        </div>
    );
}

