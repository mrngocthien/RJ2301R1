import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({errors:{}});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const errs = {...errors};
    
    //validation
    if (!value) {
      errs.errors[name] = `${name} Khong duoc de trong`;
    } else {
      errs.errors[name] = '';
    }
    setErrors({
      ...errors,
      ...errs
    })
    
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    
  };

  const handleSubmit = (event) => {
    const {username, password} = formValues;

    event.preventDefault();

    //auth
    if (username === 'thiengeneral1@gmail.com' && password === 'ngocthien') {
      setIsShown(true); // Submit form data
    } else {
      alert('Missing parameter !')
    }

    setFormValues((prevValues) => ({...prevValues, username:'', password:''}));
  }; 

  const handleLogout = () => {
    setIsShown(false);
  }

  return (
    <>
      {
        isShown ?
        <>
          <h1>Wellcome to React Form</h1>
          <button onClick={handleLogout}>LogOut</button>
        </>
        : 
        <form style={{width: 250, margin: "auto", background: 'wheat', padding:20}} onSubmit={handleSubmit}>
          <label style={{marginBottom:10}}>
            Username:
            <input type="text" name="username" value={formValues.username} onChange={handleChange} onBlur={handleChange}/>
            {errors.errors?.username && <p>{errors.errors.username}</p>}
          </label><br/>
          <label style={{marginBottom:10}}>
            Password:
            <input type="password" name="password" value={formValues.password} onChange={handleChange} onBlur={handleChange} />
            {errors.errors?.password && <p>{errors.errors.password}</p>}
          </label><br/>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      }
    </>
  );
}
