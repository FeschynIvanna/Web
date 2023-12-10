import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart } from './actions';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Ім'я є обов'язковим полем"),
  lastName: Yup.string().required("Прізвище є обов'язковим полем"),
  email: Yup.string().email("Електронна пошта має бути коректною").required("Електронна пошта є обов'язковою"),
  phone: Yup.string().matches(/^\d+$/, "Телефон повинен містити лише цифри"),
  address: Yup.string().required("Адреса є обов'язковою"),
});


const ErrorMessageComponent = ({ name }) => (
  <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
);

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [successMessage, setSuccessMessage] = React.useState('');

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
        {flowersData.map((flower) => {
          const cartItem = cart.find((item) => item.id === flower.id);
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

      {/* Add Formik form for checkout */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Submitting form:', values);

          
          setSuccessMessage('УСПІХ! Замовлення оформлено.');

          setSubmitting(false);
        }}
      >
        <Form>
          <h2>Checkout</h2>
          <div>
            <label htmlFor="firstName">Ім'я:</label>
            <Field type="text" name="firstName" />
            <ErrorMessageComponent name="firstName" />
          </div>

          <div>
            {/* Add similar blocks for other form fields */}
            <label htmlFor="lastName">Прізвище:</label>
            <Field type="text" name="lastName" />
            <ErrorMessageComponent name="lastName" />
          </div>

          <div>
            <label htmlFor="email">Електронна пошта:</label>
            <Field type="text" name="email" />
            <ErrorMessageComponent name="email" />
          </div>

          <div>
            <label htmlFor="phone">Телефон:</label>
            <Field type="text" name="phone" />
            <ErrorMessageComponent name="phone" />
          </div>

          <div>
            <label htmlFor="address">Адреса:</label>
            <Field type="text" name="address" />
            <ErrorMessageComponent name="address" />
          </div>

          <button type="submit">Оформити замовлення</button>
        </Form>
      </Formik>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default CartPage;
