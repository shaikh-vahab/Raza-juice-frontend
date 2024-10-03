// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
// import Juices from './Pages/pages/Juices';
import Navbar from './components/Navbar';
import Menus from './Pages/pages/Menus'
import MakeReservation from './Pages/pages/MakeReservation'
import About from './Pages/pages/About'
import AddCart from './Pages/pages/AddToCart';
import Dryfruits from './Pages/pages/Dryfruits';
import DisplayJuices from './components/Juice';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
     <div className="navMain"> <Navbar /></div>
    

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Juice" element={<DisplayJuices />} />
        <Route path="/Dryfruits" element={<Dryfruits />} />
        <Route path="/Menus" element={<Menus />} />
        <Route path="/About" element={<About />} />
        <Route path="/MakeReservation" element={<MakeReservation />} />
        <Route path="/AddCart" element={<AddCart />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;