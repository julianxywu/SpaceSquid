/* React imports */
import React from 'react';
import { NavLink } from 'react-router-dom';


const TopBarNav = (props) => {
  return (
    <div className="topbarnav-container">
      <NavLink to="/"><button type="button" className="default-button nav-button">Back to Homepage</button></NavLink>
      <NavLink to="/solarSystem"><button type="button" className="default-button nav-button">To SolarSystem</button></NavLink>
    </div>
  );
};

export default TopBarNav;
