
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './CartContext'; 

import './pinki.css'
import './assets/bootstrap.min.css';
import './assets/bootstrap.bundle.min.js';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

  <CartProvider>

  <App />

  </CartProvider>
  
  </React.StrictMode>
);