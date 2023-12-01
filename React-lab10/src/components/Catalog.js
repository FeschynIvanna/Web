import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import CatalogFilters from './CatalogFilters';
import './Catalog.css';

const Catalog = () => {
  const [flowers, setFlowers] = useState([]);
  const [search, setSearch] = useState('');
  const [appliedFilters, setAppliedFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const response = await axios.get('http://localhost:3001/api/flowers', {
          params: { filters: appliedFilters, search },
        });
  
        setFlowers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [appliedFilters, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const applyFilters = (flowers) => {
    flowers = flowers.filter((flower) =>
      flower.title.toLowerCase().includes(search.toLowerCase())
    );
  
    if (appliedFilters.minPrice && appliedFilters.maxPrice) {
      flowers = flowers.filter(
        (flower) =>
          parseFloat(flower.price) >= parseFloat(appliedFilters.minPrice) &&
          parseFloat(flower.price) <= parseFloat(appliedFilters.maxPrice)
      );
    }
  
  
    return flowers;
  };

  const filteredFlowers = applyFilters(flowers);

  return (
    <div>
      <h1>Catalog page</h1>
      <CatalogFilters onApplyFilters={handleApplyFilters} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Пошук..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flowers-container">
        {loading && <p>Завантаження...</p>} {/* Відображення завантажувача під час отримання даних */}
        {filteredFlowers.map((flower) => (
          <div key={flower.id} className="flower-container">
            <img src={`./img/${flower.img}`} alt={flower.title} />
            <h3>{flower.title}</h3>
            <p>Ціна: ${flower.price}</p>
            <Link to={`/catalog/${flower.id}`}>
              <button className="button">View more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
