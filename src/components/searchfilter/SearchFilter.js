import React, { useState, useEffect } from 'react';
import './searchfilter.css'; // Import your CSS file
import { GetAllAmbience } from '../../services/ambience/ambience';

const SearchFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
      budget: '',
      ambience: '',
      cuisineType: '',
      location: '',
    });
  
    const [ambienceOptions, setAmbienceOptions] = useState([]);
  
    useEffect(() => {
      // Fetch Ambience Options from Backend
      GetAllAmbience()
      const getAllAmbience = async () => {
        const params = {
          paginate: false,
        }
        const data = await GetAllAmbience(params)
        console.log(ambienceOptions)
        setAmbienceOptions(data.data.data)
      }
  
      getAllAmbience()
        .catch(error => {
          console.error('Error fetching ambience options:', error);
        });
    }, []);
  
    const handleFilterChange = (filterName, value) => {
      const newFilters = { ...filters, [filterName]: value };
      setFilters(newFilters);
    };
  
    const handleSearch = () => {
      onFilterChange(filters);
      // You can perform additional actions based on the selected filters
      console.log('Applying Filters', filters);
    };
  
    return (
      <div className="restaurant-filter-container">
        <h3>Filter </h3>
  
        {/* Budget Filter with Horizontal Scroll */}
        <div className="filter-group">
          <label>Budget:</label>
          <input
            type="range"
            min="100"
            max="6000"
            value={filters.budget}
            onChange={(e) => handleFilterChange('budget', e.target.value)}
          />
          <span>{filters.budget}</span>
        </div>
  
        {/* Ambience Filter */}
        <div className="filter-group">
          <label>Ambience:</label>
          <select
            value={filters.ambience}
            onChange={(e) => handleFilterChange('ambience', e.target.value)}
          >
            <option value="">Select Ambience</option>
            {ambienceOptions.map(option => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
  
        {/* ... other filters ... */}
  
        <div className="filter-group">
          <label>Location:</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="Enter Location"
          />
        </div>
  
        {/* Search Button */}
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };

export default SearchFilter;
