import { Route, Routes } from 'react-router-dom';
import './app.module.css';
import Login from './components/login/login';
import { useState } from 'react';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import Preview from './components/preview/preview';

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
          path='/maker'
          element={<Maker auth={auth} login={login} setLogin={setLogin} />}
        />
        <Route path='/preview' element={<Preview />} />
        <Route
          path='*'
          element={<h1 style={{ color: 'orange' }}>PAGE NOT FOUND😥</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
