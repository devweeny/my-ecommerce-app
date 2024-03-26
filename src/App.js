import Homepage from "./component/Homepage";
import Productpage from "./component/Productpage";
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
