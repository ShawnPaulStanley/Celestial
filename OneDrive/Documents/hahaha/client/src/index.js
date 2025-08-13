import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './styles/navigation.css';
import './styles/home.css';
import './styles/cart.css';
import './styles/checkout.css';
import './styles/venom-effects.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
