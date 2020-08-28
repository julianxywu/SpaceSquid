/* React imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Custom imports */
import '../style/planetWelcomePage.scss';
import TopBarNav from './topBarNav';


const PlanetWelcome = (props) => {
  return (

    <div className="main-container">
      <TopBarNav />
      <div className="content">
        We will be looking at all 8 planets of our solar system! However, let&apos;s begin with our star, the Sun!
      </div>
      <div className="button-area">
        <NavLink to="/planets/1"><button type="button" className="default-button nav-button">To Sun</button></NavLink>
      </div>
    </div>
  );
};

export default PlanetWelcome;
