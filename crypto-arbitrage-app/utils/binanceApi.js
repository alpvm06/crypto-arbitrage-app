// src/utils/binanceApi.js
export async function getBinancePrice(symbol = 'BTCUSDT') {
  const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.price;
  } catch (error) {
    console.error('Binance API error:', error);
    return null;
  }
}
