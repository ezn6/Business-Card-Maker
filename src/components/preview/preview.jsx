import React from 'react';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/maker');
  };

  return (
    <>
      <div>Preview</div>
      <button onClick={onClick}>maker로 이동</button>
    </>
  );
};

export default Preview;
