import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBitcoin, FaEthereum } from 'react-icons/fa'; // FaLitecoin is not available, so removed it
import { SiLitecoin } from 'react-icons/si'; // Import Litecoin from Simple Icons

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // Redirects to the home page
  };

  return (
    <div className="get-started-container">
      <div className="crypto-icons">
        <FaBitcoin className="crypto-icon" />
        <FaEthereum className="crypto-icon" />
        <SiLitecoin className="crypto-icon" />
      </div>
      <button className="get-started-button" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
