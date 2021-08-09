import React from "react";

const SearchBar = () => {
  return (
    <div className=" bg-white h-14 rounded-full border border-gray-600 my-auto px-4 py-2 flex items-center text-gray-400 focus-within:text-gray-600 ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
          type="text"
          name="search"
          // onChange={handleSearch}
          className="ml-2 bg-white  border-none w-80 focus:ring-0"
          placeholder="Search for anything"
          />
        
    </div>
  );
};

export default SearchBar;