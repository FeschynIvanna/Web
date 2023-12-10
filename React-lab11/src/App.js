import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';  // Assuming you have a store file
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Items from './components/Items';
import Footer from './components/Footer';
import Cart from './components/CartPage';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:flowerId" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success-page" component={<SuccessPage/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
