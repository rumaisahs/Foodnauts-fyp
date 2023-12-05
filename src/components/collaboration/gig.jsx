import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform any search-related logic here
    // For simplicity, let's just navigate to a search results page with the query
    navigate.push(`/search?query=${searchQuery}`);
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control me-2"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        <i className="bi bi-search"></i> Search
      </button>
    </div>
  );
};

export default SearchBar;
