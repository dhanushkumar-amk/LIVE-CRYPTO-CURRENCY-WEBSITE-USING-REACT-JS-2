import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useState } from 'react';
import GetStarted from './pages/GetStarted/GetStarted';

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route
          path='/'
          element={<GetStarted/>}
        /> 
       <Route
          path='/home'
          element={<Home/>}
        />
        <Route
          path='/coin/:coinId'
          element={<Coin />}
        />
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;
