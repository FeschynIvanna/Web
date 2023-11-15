import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilters from './CatalogFilters'; 
import './Catalog.css';


const flowersData = [
{
    id: 1,
    title: 'Ірис',
    img: 'images2.jpg',
    price: '49.99',
    description: 'Дуже гарний ірис',
},
{
    id: 2,
    title: 'Соняшник',
    img: 'images3.jpg',
    price: '99.99',
    description: 'Великий і яскравий соняшник',
},
{
    id: 3,
    title: 'Троянда',
    img: 'images6.jpg',
    price: '70.00',
    description: 'Червона троянда з красивим запахом',
},
{
    id: 4,
    title: 'Тюльпан',
    img: 'images1.jpg',
    price: '45.50',
    description: 'Ніжний тюльпан рожевого кольору',
},
{
  id: 5,
  title: 'Орхідея',
  img: 'images5.jpg',
  price: '88.60',
  description: 'Невелика орхідея рожевого кольору',
},
{
  id: 6,
  title: 'Фіалка',
  img: 'images4.jpg',
  price: '30.00',
  description: 'Ніжна фіалка',
}
];

const Catalog = () => {
  const [search, setSearch] = useState('');
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const filteredFlowers = flowersData.filter((flower) =>
    flower.title.toLowerCase().includes(search.toLowerCase())
  );

  const applyFilters = (flowers) => {
    if (appliedFilters.minPrice && appliedFilters.maxPrice) {
      flowers = flowers.filter(
        (flower) =>
          parseFloat(flower.price) >= parseFloat(appliedFilters.minPrice) &&
          parseFloat(flower.price) <= parseFloat(appliedFilters.maxPrice)
      );
    }

    return flowers;
  };

  const filteredFlowersWithFilters = applyFilters(filteredFlowers);

  return (
    <div>
      <h1>Catalog page</h1>
      <CatalogFilters onApplyFilters={handleApplyFilters} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flowers-container">
        {filteredFlowersWithFilters.map((flower) => (
          <div key={flower.id} className="flower-container">
            <img src={`./img/${flower.img}`} alt={flower.title} />
            <h3>{flower.title}</h3>
            <p>Price: ${flower.price}</p>
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