import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ auth, login, setLogin }) => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    const method = e.target.getAttribute('data-method');
    console.log(method);
    auth.login(method).then((result) => {
      const user = result.user;
      console.log(user.uid);
      setLogin(true);
      navigate('/maker');
      //로그인 중간에 창을 꺼버리면 나오는 프로미스 오류 해결하기
    });
  };

  return (
    <div className={styles.layout}>
      <Header auth={auth} login={login} setLogin={setLogin} />
      <section className={styles.section}>
        <h2 className={styles.title}>Login</h2>
        <button
          className={styles.loginBtn}
          onClick={onLogin}
          data-method='google'
        >
          Google
        </button>
        <button
          className={styles.loginBtn}
          onClick={onLogin}
          data-method='github'
        >
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
