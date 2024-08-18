// src/components/ItemNameSearch.js
import React, { useState } from 'react';
import ItemArticulSearch from './ItemArticulSearch';
import ItemNameSearch from './ItemNameSearch';

const SearchBars = () => {

  return (
    <div className='flex flex-col min-h-screen bg-gray-100 justify-center'>
    <ItemArticulSearch/>
    <ItemNameSearch/>
    </div>
  );
};

export default SearchBars;
