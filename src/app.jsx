import { Route, Routes } from 'react-router-dom';
import './app.module.css';
import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';

function App({ auth }) {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Login auth={auth} />} />
        <Route path='/maker' element={<Maker auth={auth} />} />
        <Route
          path='*'
          element={<h1 style={{ color: 'orange' }}>PAGE NOT FOUND😥</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
