import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleInputChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    onSearch(newSearchText); 
  };

  return (
    <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-search'>
        <input
          type="text"
          id='search-navbar'
          className='w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300'
          placeholder="Search Note.."
          value={searchText}
          onChange={handleInputChange}
        />
    </div>
  );
};

export default SearchBar;