import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useState } from 'react';
import GetStarted from './pages/GetStarted/GetStarted';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import Contact from './pages/Discussion/Contact';
import CoinData from './pages/Coindata/CoinData';
import Profile from './pages/ProfilePage/Profile';
import WatchList from './pages/WatchList/WatchList';


const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      <ToastContainer/>
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
          path='/contact'
          element={<Contact/>}
        />
        
        <Route
          path='/profile'
          element={<Profile/>}
        />
        
        <Route path='/coinsData'
        element={<CoinData/>}
        />
        <Route path='/watchList'
        element={<WatchList/>}
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
