import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({ auth, login, setLogin }) => {
  const navigate = useNavigate();

  if (!login) {
    return <Navigate to='/' />;
  }

  const onClick = () => {
    navigate('/preview');
  };

  return (
    <>
      <Header auth={auth} login={login} setLogin={setLogin} />
      <h2>Maker component</h2>
      {/* 새로운 컴포넌트 추가해서 틀만 만들어보고 디자인 완성하기 */}
      <button onClick={onClick}>preview로 이동</button>
      <Footer />
    </>
  );
};

export default Maker;
