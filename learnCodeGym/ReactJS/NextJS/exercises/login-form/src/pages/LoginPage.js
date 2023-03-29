import Head from 'next/head';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
