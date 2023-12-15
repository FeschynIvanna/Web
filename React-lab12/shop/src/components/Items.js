import React from 'react';
import { useParams } from 'react-router-dom';
import CartButton from './CartButton';

const flowersData = [
{
    id: 1,
    title: 'Ірис',
    img: 'images2.jpg',
    price: '49.99',
    description: 'Дуже гарний ірис'
},
{
    id: 2,
    title: 'Соняшник',
    img: 'images3.jpg',
    price: '99.99',
    description: 'Великий і яскравий соняшник'
},
{
    id: 3,
    title: 'Троянда',
    img: 'images6.jpg',
    price: '70.00',
    description: 'Червона троянда з красивим запахом'
},
{
    id: 4,
    title: 'Тюльпан',
    img: 'images1.jpg',
    price: '45.50',
    description: 'Ніжний тюльпан рожевого кольору'
},
{
    id: 5,
    title: 'Орхідея',
    img: 'images5.jpg',
    price: '88.60',
    description: 'Невелика орхідея рожевого кольору'
},
{
    id: 6,
    title: 'Фіалка',
    img: 'images4.jpg',
    price: '30.00',
    description: 'Ніжна фіалка'
}
];

const Items = () => {
    const { flowerId } = useParams();
    const flower = flowersData.find((item) => item.id.toString() === flowerId);
  
    if (!flower) {
      return <div>Flower not found!</div>;
    }
  
    return (
      <div>
        <h1>{flower.title}</h1>
        <img src={flower.img} alt={flower.title} />
        <p>Price: ${flower.price}</p>
        <p>Description: {flower.description}</p>
        <CartButton product={flower} />
      </div>
    );
  }
  
  export default Items;