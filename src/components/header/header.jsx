import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <div className={styles.header}>
      <img className={styles.img} src='./images/logo.png' alt='logo' />
      {onLogout && (
        <button className={styles.btn} onClick={onLogout}>
          Logout
        </button>
      )}
      <h1>Business Card Maker</h1>
    </div>
  );
};

export default Header;
