import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container celestial-glow">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button 
            className="cart-close" 
            onClick={() => setIsCartOpen(false)}
          >
            ×
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="cart-empty">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button className="celestial-btn checkout-btn">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
