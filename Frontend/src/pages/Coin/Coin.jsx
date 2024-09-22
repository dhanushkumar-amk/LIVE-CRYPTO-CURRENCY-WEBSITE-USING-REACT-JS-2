import { useContext, useEffect, useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/coinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  const [historicalData, setHistoricalData] = useState();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-M2R6dzFxr5SGLffUh7LsPhtC',
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-M2R6dzFxr5SGLffUh7LsPhtC',
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [coinId, currency]);

  const renderDescription = () => {
    if (coinData && coinData.description && coinData.description.en) {
      const descriptionLines = coinData.description.en.split('\n').slice(0, 3); // Limit to 3 lines
      return (
        <>
          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {descriptionLines.length < 3 && <p>...</p>}
        </>
      );
    }
    return null;
  };

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className='coin-name'>
          <img src={coinData.image?.large} alt='coin' />
          <p>
            <b>
              {coinData.name} ({coinData.symbol?.toUpperCase()})
            </b>
          </p>
        </div>
        <div className='coin-chart'>
          <LineChart HistoricalData={historicalData} />
        </div>

        <div className='coin-info'>
          <ul>
            <li>Crypto Market Rank </li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.current_price[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.market_cap[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour High </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.high_24h[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Low </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.low_24h[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hour Price Change </li>
            <li>
              {coinData.market_data.price_change_percentage_24h?.toFixed(2)}%
            </li>
          </ul>
          {/* <ul>
            <li>All-Time High </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.ath[currency.name]?.toLocaleString()}
            </li>
          </ul> */}
          {/* <ul>
            <li>All-Time Low </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.atl[currency.name]?.toLocaleString()}
            </li>
          </ul> */}
          <ul>
            <li>Trading Volume (24h) </li>
            <li>
              {currency.symbol}{' '}
              {coinData.market_data.total_volume[currency.name]?.toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Circulating Supply </li>
            <li>
              {coinData.market_data.circulating_supply?.toLocaleString()}{' '}
              {coinData.symbol?.toUpperCase()}
            </li>
          </ul>
          <ul>
            <li>Total Supply </li>
            <li>
              {coinData.market_data.total_supply?.toLocaleString()}{' '}
              {coinData.symbol?.toUpperCase()}
            </li>
          </ul>
          <ul>
            <li>Website </li>
            <li>
              <a
                href={coinData.links?.homepage[0]}
                target='_blank'
                rel='noopener noreferrer'>
                {coinData.links?.homepage[0]}
              </a>
            </li>
          </ul>
          <div className='coin-social'>
            {coinData.links?.twitter_screen_name && (
              <a
                href={`https://twitter.com/${coinData.links.twitter_screen_name}`}
                target='_blank'
                rel='noopener noreferrer'>
                <FaTwitter />
              </a>
            )}
            {coinData.links?.facebook_username && (
              <a
                href={`https://facebook.com/${coinData.links.facebook_username}`}
                target='_blank'
                rel='noopener noreferrer'>
                <FaFacebook />
              </a>
            )}
            {coinData.links?.linkedin_username && (
              <a
                href={`https://linkedin.com/in/${coinData.links.linkedin_username}`}
                target='_blank'
                rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
            )}
            {coinData.links?.github_username && (
              <a
                href={`https://github.com/${coinData.links.github_username}`}
                target='_blank'
                rel='noopener noreferrer'>
                <FaGithub />
              </a>
            )}
          </div>
          <div className='coin-description'>
            <p>Description</p>
            {renderDescription()}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    );
  }
};

export default Coin;
