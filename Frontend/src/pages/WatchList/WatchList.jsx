import React, { useState } from 'react';
import './WatchList.css'; // Make sure to create this CSS file for styling
import { FaTrash, FaComment } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('watchlist')) || []);
  const navigate = useNavigate();

  const handleRemoveFromWatchlist = (coinId) => {
    const updatedWatchlist = watchlist.filter(coin => coin.id !== coinId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  const handleDiscussionClick = () => {
    // Navigate to contact form or open a modal (implement your own logic)
    navigate('/contact');
  };

  return (
    <div className="watchlist-container">
      <h1>WatchList</h1>
      {watchlist.length > 0 ? (
        <ul className="watchlist">
          {watchlist.map((coin) => (
            <li key={coin.id} className="watchlist-item">
              <Link to={`/coin/${coin.id}`} className="watchlist-link">
                <img src={coin.image} alt={coin.name} width="30" />
                <span>{coin.name} ({coin.symbol.toUpperCase()}): {coin.currentPrice}</span>
              </Link>
              <div className="button-container">
                <button className="remove-button" onClick={() => handleRemoveFromWatchlist(coin.id)}>
                  <FaTrash />
                </button>
                <button className="discussion-button" onClick={handleDiscussionClick}>
                  <FaComment />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default WatchList;
