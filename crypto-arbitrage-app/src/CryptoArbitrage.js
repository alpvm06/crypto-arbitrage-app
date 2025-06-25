import React from 'react';

const CryptoArbitrage = () => {
  return (
    <div>
      <h1>Crypto Arbitrage App</h1>
      <p>Farklı borsalar arası fiyat farklarını buradan takip edebilirsiniz.</p>
    </div>
  );
};

export default CryptoArbitrage;

import React from 'react';
import './CryptoArbitrage.css';

const CryptoArbitrage = () => {
  return (
    <div className="container">
      <h1>Crypto Arbitrage App</h1>
      <p>Farklı borsalar arası fiyat farklarını buradan takip edebilirsiniz.</p>
    </div>
  );
};

export default CryptoArbitrage;

import React, { useEffect, useState } from 'react';
import { getBinancePrice } from './utils/binanceApi';

function CryptoArbitrage() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      const price = await getBinancePrice();
      setPrice(price);
    }
    fetchPrice();
  }, []);

  return (
    <div>
      <h1>Crypto Arbitrage App</h1>
      <p>BTC/USDT Binance: {price ? `$${parseFloat(price).toFixed(2)}` : 'Yükleniyor...'}</p>
    </div>
  );
}

export default CryptoArbitrage;
