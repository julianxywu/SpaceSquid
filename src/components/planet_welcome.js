/* React imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Custom imports */

const TopBarSignIn = (props) => {
  return (
    <div className="buttons-container">
      <NavLink to="/"><button type="button" className="default-button nav-button">Back to Homepage</button></NavLink>
      <NavLink to="/solarSystem"><button type="button" className="default-button nav-button">To SolarSystem</button></NavLink>
      <NavLink to="/planet/Sun"><button type="button" className="default-button nav-button">To Sun</button></NavLink>
    </div>
  );
};

const PlanetWelcome = (props) => {
  return (
    <div className="main-container">
      <div className="planetpage-title">
        Welcome to the Planet Page!
      </div>
      <TopBarSignIn />
    </div>
  );
};

export default PlanetWelcome;
