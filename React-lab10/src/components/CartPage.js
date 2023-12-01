import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart } from './actions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
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

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {flowersData.map(flower => {
          const cartItem = cart.find(item => item.id === flower.id);
          const quantityInCart = cartItem ? cartItem.quantity : 0;

          return (
            <li key={flower.id}>
              {flower.title} - {quantityInCart} in cart
              <button onClick={() => handleRemoveFromCart(flower.id)}>Remove</button>
              <button onClick={() => handleAddToCart(flower)}>Add One More</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartPage;
