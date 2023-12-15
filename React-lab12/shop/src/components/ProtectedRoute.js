import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isLoggedIn = !!localStorage.getItem('email');

    return isLoggedIn ? <Route element={element} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
