import React, { useState } from 'react';

const CatalogFilters = ({ onApplyFilters }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      minPrice,
      maxPrice,
    
    };
    onApplyFilters(filters);
  };

  return (
    <div className="catalog-filters">
      <label>
        Min Price:
        <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>

      <label>
        Max Price:
        <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default CatalogFilters;
