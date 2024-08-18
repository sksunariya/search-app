// src/components/ItemNameSearch.js
import React, { useState } from 'react';
import { searchByName } from '../services/apiService';

const ItemNameSearch = () => {
  const [name, setName] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    // const result = await searchByName(name);
    window.open(`/details?name=${name}`, '_blank');
  };

  return (
    <div className="flex mt-16 mx-4 mb-2 flex-col items-center justify-center bg-gray-100">
        
      <h1 className="text-4xl font-bold mb-8">Search by Item Name</h1>
      <form onSubmit={handleSearch} className="w-full max-w-lg">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Search 2
        </button>
      </form>
    </div>
  );
};

export default ItemNameSearch;
