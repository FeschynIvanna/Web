import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Items from './components/Items';
import Footer from './components/Footer';
import Cart from './components/CartPage';
import SuccessPage from './components/SuccessPage';
import Login from './components/Login';
import Register from './components/Register';


const ProtectedRoute = ({ element }) => {
  const isLoggedIn = !!localStorage.getItem('email');
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={<ProtectedRoute element={<Home />} />}
            />
            <Route
              path="/catalog"
              element={<ProtectedRoute element={<Catalog />} />}
            />
            <Route
              path="/catalog/:flowerId"
              element={<ProtectedRoute element={<Items />} />}
            />
            <Route
              path="/cart"
              element={<ProtectedRoute element={<Cart />} />}
            />
            <Route
              path="/success-page"
              element={<ProtectedRoute element={<SuccessPage />} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
