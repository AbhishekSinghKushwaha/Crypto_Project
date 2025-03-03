import axios from 'axios';

export const fetchCryptoPrices = async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,binancecoin,dogecoin,solana',
        order: 'market_cap_desc',
        per_page: 5,
        page: 1,
        sparkline: false,
      },
    }
  );
  return response.data;
};