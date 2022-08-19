import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ auth, login, setLogin }) => {
  const navigate = useNavigate();
  const onGoogle = () => {
    auth
      .loginGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user.uid);
        setLogin(true);
      })
      .then(() => navigate('/home'));
  };

  const onGithub = () => {
    auth.loginGithub();
  };

  return (
    <div className={styles.layout}>
      <Header auth={auth} login={login} setLogin={setLogin} />
      <section className={styles.section}>
        <h2 className={styles.title}>Login</h2>
        <button className={styles.loginBtn} onClick={onGoogle}>
          Google
        </button>
        <button className={styles.loginBtn} onClick={onGithub}>
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
