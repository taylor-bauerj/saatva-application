import React, { useState } from 'react';
import './App.css';
import './App.scss';
import Header from 'components/Header/Header';
import Carousel from 'components/Carousel/Carousel';

function App() {
    const [cartCount, setCartCount] = useState(0);
    const addToCart = () => {
        setCartCount(cartCount+1);
    };

  return (
    <div className="App">
        <Header cartCount={cartCount} />
        <Carousel addToCart={addToCart} />
    </div>
  );
}

export default App;