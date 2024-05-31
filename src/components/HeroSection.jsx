// import React from "react";

import { Link } from 'react-router-dom';
import '../Css/HeroSection.modules.css'

const Main = () => {
  return (
    <>
      <header>
        <div className="mainimg">
          <Link to={'/Juices'}><button className="OrderMenu">Order Your Favourite Juice  🔎</button></Link>
        </div>
      </header>
    </>
    //     
  );
};

export default Main;
