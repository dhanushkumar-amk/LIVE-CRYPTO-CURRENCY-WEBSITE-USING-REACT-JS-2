import './Navbar.css';import logo from '../../assets/logo.png';
import ArrowIcon from '../../assets/arrow_icon.png';
import {useContext} from 'react';
import {CoinContext} from '../../context/coinContext';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({name: 'usd', symbol: '$'});
        break;
      case 'eur':
        setCurrency({name: 'eur', symbol: '€'});
        break;
      case 'inr':
        setCurrency({name: 'inr', symbol: '₹'});
        break;
      case 'gbp': // British Pound
        setCurrency({name: 'gbp', symbol: '£'});
        break;
      case 'aud': // Australian Dollar
        setCurrency({name: 'aud', symbol: 'A$'});
        break;
      case 'cad': // Canadian Dollar
        setCurrency({name: 'cad', symbol: 'C$'});
        break;
      case 'jpy': // Japanese Yen
        setCurrency({name: 'jpy', symbol: '¥'});
        break;
      case 'cny': // Chinese Yuan
        setCurrency({name: 'cny', symbol: '¥'});
        break;
      case 'chf': // Swiss Franc
        setCurrency({name: 'chf', symbol: 'CHF'});
        break;
      case 'rub': // Russian Ruble
        setCurrency({name: 'rub', symbol: '₽'});
        break;
      case 'krw': // South Korean Won
        setCurrency({name: 'krw', symbol: '₩'});
        break;
      case 'nzd': // New Zealand Dollar
        setCurrency({name: 'nzd', symbol: 'NZ$'});
        break;
      case 'mxn': // Mexican Peso
        setCurrency({name: 'mxn', symbol: 'MX$'});
        break;
      case 'zar': // South African Rand
        setCurrency({name: 'zar', symbol: 'R'});
        break;
      case 'sgd': // Singapore Dollar
        setCurrency({name: 'sgd', symbol: 'S$'});
        break;
      case 'hkd': // Hong Kong Dollar
        setCurrency({name: 'hkd', symbol: 'HK$'});
        break;
      default:
        setCurrency({name: 'usd', symbol: '$'});
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='Logo'
          className='logo'
        />
      </Link>

      <ul>
        <Link to={'/'}>
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

        <Link to='/login'>
          Sign Up{' '}
          <img
            src={ArrowIcon}
            alt='Arrow icon'
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
