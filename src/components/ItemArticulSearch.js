
import React, { useState } from 'react';
import { searchByArticul } from '../services/apiService';

const ItemArticulSearch = () => {
  const [articul, setArticul] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await searchByArticul(articul);
    window.open(`/results?articul=${articul}`, '_blank');
  };

  return (
    <div className="mx-4 my-2 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Search by Item Articul</h1>
      <form onSubmit={handleSearch} className="w-full max-w-lg">
        <input
          type="text"
          value={articul}
          onChange={(e) => setArticul(e.target.value)}
          placeholder="Enter item articul..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Search 1
        </button>
      </form>
    </div>
  );
};

export default ItemArticulSearch;
