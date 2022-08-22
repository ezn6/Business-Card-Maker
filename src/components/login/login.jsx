import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ auth }) => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    const method = e.currentTarget.textContent;
    console.log(method);
    auth.login(method).then((result) => {
      const user = result.user;
      navigate('/maker', { state: { userId: user.uid } });
    });
  };

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (user) {
        navigate('/maker', { state: { userId: user.uid } });
      }
    });
  });

  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.section}>
        <h2 className={styles.title}>Login</h2>
        <button className={styles.loginBtn} onClick={onLogin}>
          Google
        </button>
        <button className={styles.loginBtn} onClick={onLogin}>
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
