import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';

const Maker = ({ auth }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.logout().then(() => {
      console.log('logout successful.');
    });
  };

  useEffect(() => {
    auth.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <>
      <Header onLogout={onLogout} />
      <h2>Maker component</h2>
      <Footer />
    </>
  );
};

export default Maker;
