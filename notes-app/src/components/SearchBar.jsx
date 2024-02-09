import React from "react";
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="w-full flex justify-center p-1 mb-4">
            <div className="relative w-full">
                <input type="text" className="w-full  bg-white py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-black transition-colors duration-300" placeholder="Search..." 
                    value={keyword}
                    onChange={(event) => keywordChange(event.target.value)}/>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                </div>
            </div>
        </div>
    );
};

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
};

export default SearchBar;