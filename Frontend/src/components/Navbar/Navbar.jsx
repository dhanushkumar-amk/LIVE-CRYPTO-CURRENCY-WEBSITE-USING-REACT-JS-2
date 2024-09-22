import './Navbar.css';
import { FaChartLine, FaUser } from 'react-icons/fa'; // Import the trade and user icons
import { useContext } from 'react';
import { CoinContext } from '../../context/coinContext';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      case 'gbp':
        setCurrency({ name: 'gbp', symbol: '£' });
        break;
      case 'aud':
        setCurrency({ name: 'aud', symbol: 'A$' });
        break;
      case 'cad':
        setCurrency({ name: 'cad', symbol: 'C$' });
        break;
      case 'jpy':
        setCurrency({ name: 'jpy', symbol: '¥' });
        break;
      case 'cny':
        setCurrency({ name: 'cny', symbol: '¥' });
        break;
      case 'chf':
        setCurrency({ name: 'chf', symbol: 'CHF' });
        break;
      case 'rub':
        setCurrency({ name: 'rub', symbol: '₽' });
        break;
      case 'krw':
        setCurrency({ name: 'krw', symbol: '₩' });
        break;
      case 'nzd':
        setCurrency({ name: 'nzd', symbol: 'NZ$' });
        break;
      case 'mxn':
        setCurrency({ name: 'mxn', symbol: 'MX$' });
        break;
      case 'zar':
        setCurrency({ name: 'zar', symbol: 'R' });
        break;
      case 'sgd':
        setCurrency({ name: 'sgd', symbol: 'S$' });
        break;
      case 'hkd':
        setCurrency({ name: 'hkd', symbol: 'HK$' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/home'}>
        <div className='logo-container'>
          <FaChartLine className='trade-icon' /> {/* Crypto trade icon */}
          <h1 className='logo-text'>Cryptoken</h1>
        </div>
      </Link>

      <ul>
        <Link to={'/home'}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className='nav-right'>
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

        <p>
          <FaUser className='user-icon' onClick={() => setShowLogin(true)} /> {/* User icon for login */}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
