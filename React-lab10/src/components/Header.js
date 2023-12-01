import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <header>
        <nav>
            <span className='logo'>Flower</span>
            <ul className='nav'> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
        <div className='presentation'></div>
    </header>
)

export default Header;
