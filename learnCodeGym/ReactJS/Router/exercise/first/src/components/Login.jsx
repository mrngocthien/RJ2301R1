import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:<br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:<br/>
          <input type="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <div className='btn'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
