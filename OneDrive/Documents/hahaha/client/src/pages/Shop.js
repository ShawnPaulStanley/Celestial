import React from 'react';
import { useCart } from '../context/CartContext';

const items = [
  // Gaming Time
  { id: 'time-1', name: 'Game Time', hours: '1', price: 5.00, category: 'time' },
  { id: 'time-2', name: 'Game Time', hours: '3', price: 12.00, category: 'time' },
  { id: 'time-3', name: 'Game Time', hours: '5', price: 18.00, category: 'time' },
  
  // Snacks
  { id: 'snack-1', name: 'Doritos', price: 2, category: 'snacks', image: '/images/dorito.png' },
  { id: 'snack-2', name: 'Pringles', price: 2.5, category: 'snacks', image: '/images/pringles.png' },
  { id: 'snack-3', name: 'M&Ms', price: 1.5, category: 'snacks', image: '/images/mnm.png' },
  { id: 'snack-4', name: 'Skittles', price: 1.5, category: 'snacks', image: '/images/skittles.png' },
  { id: 'snack-5', name: 'Pop Tarts', price: 2, category: 'snacks', image: '/images/poptarts.png' },
  { id: 'snack-6', name: 'Hot Pockets', price: 3, category: 'snacks', image: '/images/hotpocket.png' },
  
  // Games
  { id: 'game-1', name: 'Spider-Man 2', price: 60, category: 'games', image: '/images/spiderman2_cover.jpg' },
  { id: 'game-2', name: 'Cyberpunk 2077', price: 60, category: 'games', image: '/images/Cyberpunk_2077_box_art.jpg' },
  { id: 'game-3', name: 'Counter-Strike 2', price: 6, category: 'games', image: '/images/CS2_Cover_Art.jpg' },
  { id: 'game-4', name: 'League of Legends', price: 5, category: 'games', image: '/images/league-of-legends_9uym.jpg' }
];

function Shop() {
  const { addToCart } = useCart();
  const categories = [
    { id: 'time', name: 'Gaming Time' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'games', name: 'Games' }
  ];

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    addToCart(item);
  };

  return (
    <div className="celestial-bg">
      <div className="celestial-glow" style={{ margin: '2rem', padding: '2rem' }}>
        <h2 className="celestial-title">Celestial Shop</h2>
        
        {categories.map(category => (
          <div key={category.id} className="shop-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="celestial-shop-grid">
              {items
                .filter(item => item.category === category.id)
                .map(item => (
                  <div className="celestial-shop-item celestial-glow" key={item.id}>
                    {item.category === 'time' ? (
                      <div className="time-display">
                        <h3>{item.name}</h3>
                        <div className="time-hours">{item.hours}hr</div>
                      </div>
                    ) : (
                      <img src={item.image} alt={item.name} className="celestial-item-img" />
                    )}
                    <div className="item-details">
                      {item.category !== 'time' && <h3>{item.name}</h3>}
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      className="celestial-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
