import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div>
            <h2>Order Successful!</h2>
            <p>Your order has been successfully placed. Thank you for shopping with us!</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default SuccessPage;
