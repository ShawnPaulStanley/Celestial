import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Navigation from './components/Navigation';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <CartProvider>
      <Router>
        {isLoggedIn && <Navigation />}
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/shop"
            element={isLoggedIn ? <Shop /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
          />
        </Routes>
        {isLoggedIn && <Cart />}
      </Router>
    </CartProvider>
  );
}

export default App;
