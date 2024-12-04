import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext(null);

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'usd',
    symbol: '$',
  });
  const [token, setToken] = useState("");

  const url = "https://live-crypto-currency-website-using-react.onrender.com";

  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-M2R6dzFxr5SGLffUh7LsPhtC',
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoin(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  useEffect(() => {
    // Store token in local storage
    localStorage.setItem('token', token);
  }, [token]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
    url,
    token,
    setToken,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
