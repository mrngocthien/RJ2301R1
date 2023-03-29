import { useState } from 'react';
import styles from './Login.module.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="password">Password:</label>
        <input className={styles.input} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className={styles.submit} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
