import React from 'react';
import styles from './header.module.css';

const Header = ({ auth, login, setLogin }) => {
  const logout = () => {
    auth.logout().then(() => {
      console.log('logout successful.');
      setLogin(false);
    });
  };

  return (
    <div className={styles.header}>
      <img className={styles.img} src='./images/logo.png' alt='logo' />
      {login && (
        <button className={styles.btn} onClick={logout}>
          Logout
        </button>
      )}
      <h1>Business Card Maker</h1>
    </div>
  );
};

export default Header;
