import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);


    return (
        <header>
            <div>
                <span className='logo'>Flower</span>
                <ul className='nav'>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Cart</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            </div>
            <div className='presentation'></div>
        </header>
    )
}

