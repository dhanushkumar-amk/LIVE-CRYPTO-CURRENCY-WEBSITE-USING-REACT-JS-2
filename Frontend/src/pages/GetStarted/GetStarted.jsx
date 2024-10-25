import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin } from 'react-icons/si';
import { toast } from 'react-toastify';
import { CoinContext } from '../../context/coinContext';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();
  const { token } = useContext(CoinContext);

  const handleClick = () => {
    if (token) {
      navigate('/home');
    } else {
      toast.error('Please login to continue');
    }
  };

  return (
    <div className="get-started-container">
      <div className="crypto-icons">
        <FaBitcoin className="crypto-icon" />
        <FaEthereum className="crypto-icon" />
        <SiLitecoin className="crypto-icon" />
      </div>
      <p className="crypto-info">
        Welcome to the world of cryptocurrencies! Explore Bitcoin, Ethereum, and Litecoin—three of the most popular digital currencies. Learn how they work and start your journey in the exciting crypto market.
      </p>
      <button className="get-started-button" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
