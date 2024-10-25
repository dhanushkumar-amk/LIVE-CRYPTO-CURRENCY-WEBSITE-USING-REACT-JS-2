import './Navbar.css';
import { FaChartLine, FaUser } from 'react-icons/fa'; // Import the trade and user icons
import { useContext, useEffect } from 'react';
import { CoinContext } from '../../context/coinContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const { setCurrency, token, setToken } = useContext(CoinContext);
  const navigate = useNavigate();

  // Function to handle currency change
  const currencyHandler = (event) => {
    const currencyMap = {
      usd: { name: 'usd', symbol: '$' },
      eur: { name: 'eur', symbol: '€' },
      inr: { name: 'inr', symbol: '₹' },
      gbp: { name: 'gbp', symbol: '£' },
      aud: { name: 'aud', symbol: 'A$' },
      cad: { name: 'cad', symbol: 'C$' },
      jpy: { name: 'jpy', symbol: '¥' },
      cny: { name: 'cny', symbol: '¥' },
      chf: { name: 'chf', symbol: 'CHF' },
      rub: { name: 'rub', symbol: '₽' },
      krw: { name: 'krw', symbol: '₩' },
      nzd: { name: 'nzd', symbol: 'NZ$' },
      mxn: { name: 'mxn', symbol: 'MX$' },
      zar: { name: 'zar', symbol: 'R' },
      sgd: { name: 'sgd', symbol: 'S$' },
      hkd: { name: 'hkd', symbol: 'HK$' },
    };

    setCurrency(currencyMap[event.target.value] || currencyMap.usd); // Fallback to USD
  };

  // Effect to check token on page load
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  // Function to handle sign out
  const handleSignOut = () => {
    // Clear token from state and local storage
    setToken("");
    localStorage.removeItem('token');
    // Redirect to home or login page
    navigate('/home'); // Replace with appropriate route after sign out
  };

  return (
    <div className='navbar'>
      <Link to={'/home'}>
        <div className='logo-container'>
          <FaChartLine className='trade-icon' /> {/* Crypto trade icon */}
          <h1 className='logo-text'>Cryptoken</h1>
        </div>
      </Link>

      <ul className='nav-links'>
        {token && (
          <>
            <Link to={'/home'}>Home</Link>
            <Link to={'/coinsData'}>Coins</Link>
            <Link to ={'/watchList'}>Watch List </Link>
            <Link to={'/contact'}>Contact</Link>
          </>
        )}
      </ul>

      <div className='nav-right'>
        {token ? (
          <>
            <select onChange={currencyHandler}>
              <option value='usd'>USD</option>
              <option value='eur'>EUR</option>
              <option value='inr'>INR</option>
              <option value='gbp'>GBP</option>
              <option value='aud'>AUD</option>
              <option value='cad'>CAD</option>
              <option value='jpy'>JPY</option>
              <option value='cny'>CNY</option>
              <option value='chf'>CHF</option>
              <option value='rub'>RUB</option>
              <option value='krw'>KRW</option>
              <option value='nzd'>NZD</option>
              <option value='mxn'>MXN</option>
              <option value='zar'>ZAR</option>
              <option value='sgd'>SGD</option>
              <option value='hkd'>HKD</option>
            </select>
            <FaUser className='user-icon' onClick={() => navigate("/profile")}  /> {/* Logout on user icon click */}
          </>
        ) : (
          <p onClick={() => setShowLogin(true)} className="sign-in-button">
            Sign In
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
