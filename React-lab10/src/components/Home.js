import React, { useState } from 'react';
import './Home.css'; 

const flowers = [
  {
    id: 1,
    title: 'Ірис',
    img: 'images2.jpg',
    price: '49.99'
  },
  {
    id: 2,
    title: 'Соняшник',
    img: 'images3.jpg',
    price: '99.99'
  },
  {
    id: 3,
    title: 'Троянда',
    img: 'images6.jpg',
    price: '70.00'
  },
  {
    id: 4,
    title: 'Тюльпан',
    img: 'images1.jpg',
    price: '45.50'
  },
  {
    id: 5,
    title: 'Орхідея',
    img: 'images5.jpg',
    price: '88.60'
  },
  {
    id: 6,
    title: 'Фіалка',
    img: 'images4.jpg',
    price: '30.00'
  }
];

const Home = () => {
  const [visibleFlowers, setVisibleFlowers] = useState(3); // початкова кількість квітів для показу

  const showMoreFlowers = () => {
    setVisibleFlowers((prevVisibleFlowers) => prevVisibleFlowers + 3); // збільшуємо кількість квітів на 3 при кожному кліку
  };

  return (
    <div>
      <div className="flowers-container">
        {flowers.slice(0, visibleFlowers).map((flower) => (
          <div key={flower.id} className="flower-container">
            <img src={"./img/" + flower.img} alt={flower.title} />
            <h3>{flower.title}</h3>
            <p>Price: ${flower.price}</p>
          </div>
        ))}
      </div>
      {visibleFlowers < flowers.length && (
        <button className='button1' onClick={showMoreFlowers}>
          View more
        </button>
      )}
    </div>
  );
};

export default Home;