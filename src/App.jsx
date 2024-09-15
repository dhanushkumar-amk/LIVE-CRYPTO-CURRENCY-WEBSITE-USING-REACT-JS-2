import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/coin/:coinId'
          element={<Coin />}
        />
        <Route
          path='/login'
          element={<Login/>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;