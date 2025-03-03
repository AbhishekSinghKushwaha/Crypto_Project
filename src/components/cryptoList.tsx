export default function CryptoList({ cryptos }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cryptos.map((crypto: any) => (
        <div
          key={crypto?.id}
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center space-x-4">
            <img src={crypto?.image} alt={crypto?.name} className="w-14 h-14 rounded-full" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {crypto?.name} ({crypto?.symbol.toUpperCase()})
              </h2>
              <p className="text-gray-500 text-sm">Market Rank: #{crypto?.market_cap_rank}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-gray-700">
            <p className="text-lg font-semibold">Price: <span className="text-blue-600">${crypto?.current_price.toFixed(2)}</span></p>
            <p className="text-sm">Market Cap: ${crypto?.market_cap.toLocaleString()}</p>
            <p className="text-sm">Total Volume: ${crypto?.total_volume.toLocaleString()}</p>
            <p className="text-sm">24h High: ${crypto?.high_24h.toFixed(2)}</p>
            <p className="text-sm">24h Low: ${crypto?.low_24h.toFixed(2)}</p>
          </div>

          <p className={`mt-2 text-lg font-semibold ${crypto?.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            24h Change: {crypto?.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      ))}
    </div>
  );
}
