import { Route, Routes } from 'react-router-dom';
import './app.module.css';
import Login from './components/login/login';
import Home from './components/home/home';
import { useState } from 'react';
import styles from './app.module.css';

function App({ auth }) {
  const [login, setLogin] = useState(false);

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path='/'
          element={<Login auth={auth} login={login} setLogin={setLogin} />}
        />
        <Route
          path='/home'
          element={<Home auth={auth} login={login} setLogin={setLogin} />}
        />
        <Route
          path='*'
          element={<h1 style={{ color: 'orange' }}>PAGE NOT FOUND😥</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
