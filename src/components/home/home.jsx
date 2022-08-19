import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../header/header';

const Home = ({ auth, login, setLogin }) => {
  if (!login) {
    return <Navigate to='/' />;
  }

  const test = () => {
    console.log(login);
  };
  return (
    <>
      <Header auth={auth} login={login} setLogin={setLogin} />
      <h2>🏠 Home</h2>
      <button onClick={test}>콘솔확인</button>
    </>
  );
};

export default Home;
