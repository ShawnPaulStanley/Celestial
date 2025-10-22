import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from '@phosphor-icons/react';

function Navigation() {
  const { setIsCartOpen, getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <nav className="celestial-nav">
      <div className="nav-logo">CELESTIAL</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <button 
          className="cart-button" 
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart size={20} weight="bold" /> Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
