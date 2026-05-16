
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './pinki.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Productdetails from './pages/Productdetails.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx"; 
import Tabbaner from './components/Tabbaner.jsx';
import BasketPage from "./pages/BasketPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import WelcomeModal from "./components/WelcomeModal.jsx";



function App() {

    return (

        <Router>

        <WelcomeModal />

        <ScrollToTop /> 

        <Navbar />


<Routes>

    <Route path="/" element={<Home />} />

    <Route path="/category/:categoryname" element={<Shop />} />

    <Route path="/shop/search/:searchterm" element={<Shop />} />

    <Route path="/shop" element={<Shop />} /> 

    <Route path="/product/:id" element={<Productdetails />} />

    <Route path="/Basket" element={<BasketPage />} />

    <Route path="/profile" element={<ProfilePage />} />

    <Route path="/product/:id" element={<Productdetails />} />
    
    <Route path="/about" element={<About />} />

    <Route path="/contact" element={<Contact />} />

</Routes>

        <Footer />

        </Router>
    );
}
export default App;

