import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password:''
  });

  const handleSubmit = (event) => {
    const { email, password } = formValues;
    event.preventDefault();
    onLogin(email, password);
  };

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormValues(
      {
        ...formValues,
        [name]: value
      }
    )
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:<br/>
          <input type="email" name='email' value={formValues.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:<br/>
          <input type="current-password" name='password' value={formValues.password} onChange={handleChange} />
        </label>
        <br />
        <div className='btn'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
