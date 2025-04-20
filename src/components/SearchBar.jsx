import React from 'react';
import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
  const { setSearchTerm } = useAppContext();
  return (
    <input type="text" placeholder="Search shoes..." onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 border rounded mb-4" />
  );
};

export default SearchBar;