import React from 'react';
import { useCart } from '../context/CartContext';
import Particles from '../components/Particles';

function Home() {
  const { addToCart } = useCart();

  // Duplicate declaration removed

  const featured = {
    id: 'featured-package',
    name: "Weekend Warrior Package",
    description: "5 Hours Gaming + 2 Energy Drinks + Premium Snacks",
    price: 25,
    savings: 10
  };

  const handleAddToCart = (item) => {
    console.log('Adding to cart:', item);
    addToCart(item);
  };

  const popularGames = [
    { id: 'game-1', name: "Spider-Man 2", price: 8, time: "1 Hour", image: "/images/spiderman2_cover.jpg" },
    { id: 'game-2', name: "Cyberpunk 2077", price: 8, time: "1 Hour", image: "/images/Cyberpunk_2077_box_art.jpg" },
    { id: 'game-3', name: "Counter-Strike 2", price: 6, time: "1 Hour", image: "/images/CS2_Cover_Art.jpg" },
    { id: 'game-4', name: "League of Legends", price: 5, time: "1 Hour", image: "/images/league-of-legends_9uym.jpg" }
  ];

  const combos = [
    {
      id: 'combo-1',
      name: "Solo Grind",
      items: ["2 Hours Gaming", "Monster Energy", "Doritos"],
      price: 12,
      savings: 3
    },
    {
      id: 'combo-2',
      name: "Squad Goals",
      items: ["4 Hours Gaming", "4 Energy Drinks", "2 Premium Snacks"],
      price: 35,
      savings: 15
    },
    {
      id: 'combo-3',
      name: "Night Owl",
      items: ["6 Hours Gaming", "3 Energy Drinks", "3 Premium Snacks"],
      price: 45,
      savings: 20
    }
  ];

  return (
    <div className="celestial-home">
      <Particles />
      <div className="celestial-stars"></div>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">CELESTIAL</h1>
          <p className="hero-subtitle">Your Gateway to Gaming Paradise</p>
        </div>
      </section>

      <section className="featured-deal">
        <div className="featured-content celestial-glow">
          <div className="featured-details">
            <div className="featured-image" style={{ backgroundImage: `url(/images/weekendwarriorpackage.png)` }}></div>
            <h2 className="featured-title">Weekend Warrior Package</h2>
            <p className="featured-description">5 Hours Gaming + 2 Energy Drinks + Premium Snacks</p>
            <div className="featured-price-tag">
              <span className="featured-price">$25</span>
              <span className="featured-savings">Save $10</span>
            </div>
            <button 
              className="celestial-btn pulse"
              onClick={() => handleAddToCart(featured)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="games-section">
        <h2 className="section-title">Popular Games</h2>
        <div className="games-grid">
          {popularGames.map(game => (
            <div key={game.id} className="game-card celestial-glow">
              <div 
                className="game-image" 
                style={{ backgroundImage: `url(${game.image})` }}
              ></div>
              <div className="game-info">
                <h3>{game.name}</h3>
                <p>{game.time}</p>
                <span className="game-price">${game.price}</span>
                <button 
                  className="celestial-btn small"
                  onClick={() => handleAddToCart(game)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="combos-section">
        <h2 className="section-title">Power-Up Combos</h2>
        <div className="combos-grid">
          {combos.map(combo => (
            <div key={combo.id} className="combo-card celestial-glow">
              <h3>{combo.name}</h3>
              <ul className="combo-items">
                {combo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="combo-price">
                <span className="price">${combo.price}</span>
                <span className="savings">Save ${combo.savings}</span>
              </div>
              <button 
                className="celestial-btn"
                onClick={() => handleAddToCart(combo)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
