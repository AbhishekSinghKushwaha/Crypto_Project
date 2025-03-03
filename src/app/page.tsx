'use client'
import { useState } from 'react';
import { useQuery } from 'react-query';
import CryptoList from '../components/cryptoList';
import SearchBar from '../components/searchBar';
import { fetchCryptoPrices } from '../lib/api';
import LoadingSpinner from '../components/loadingSpinner';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data, isLoading, refetch } = useQuery('cryptoPrices', fetchCryptoPrices, {
    staleTime: 60000, // 1 minute caching
  });

  const filteredCryptos = data?.filter((crypto: any) =>
    crypto?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto?.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Crypto Price Tracker</h1>
      <SearchBar onSearch={setSearchTerm} />
        <button
          onClick={() => refetch()}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Refresh Prices
        </button>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CryptoList cryptos={filteredCryptos} />
      )}
    </div>
  );
}