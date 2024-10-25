import {useContext,useEffect, useState} from 'react';
import './CoinData.css';
import {CoinContext} from '../../context/coinContext';
import { Link } from 'react-router-dom';

const CoinData = () => {
    const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <>
    <div className='title'>
        ALL Coins Details
    </div>
    <div className='crypto-table'>
    <div className='table-layout'>
      <p>#</p>
      <p>Coins</p>
      <p>Price</p>
      <p style={{textAlign: 'center'}}>24h Change</p>
      <p className='market-cap'>Market Cap</p>
    </div>
    {displayCoin.map((item, index) => (
      <Link
        to={`/coin/${item.id}`}
        className='table-layout'
        key={index}>
        <p>{item.market_cap_rank} </p>
        <div>
          <img
            src={item.image}
            alt='coin image'
          />
          <p>{item.name + ' - ' + item.symbol}</p>
        </div>

        <p>
          {currency.symbol} {item.current_price.toLocaleString()}{' '}
        </p>
        <p
          className={
            item.price_change_percentage_24h > 0 ? 'green' : 'red'
          }>
          {Math.floor(item.price_change_percentage_24h * 100) / 100}
        </p>
        <p className='market-cap'>
          {' '}
          {currency.symbol} {item.market_cap.toLocaleString()}
        </p>
      </Link>
    ))}
  </div>
  </>

  )
}

export default CoinData