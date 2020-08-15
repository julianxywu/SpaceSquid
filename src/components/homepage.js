/* React imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Custom imports */

// const TopBarSignIn = (props) => {
//   return (
//     <div className="buttons-container">
//       <NavLink to="/"><button type="button" className="default-button nav-button">Button 2</button></NavLink>
//     </div>
//   );
// };

const HomePage = (props) => {
  return (
    <div className="main-container">
      <div className="homepage-title">
        Welcome to the homepage!
      </div>
      {/* <TopBarSignIn /> */}
      <NavLink to="/planetWelcome"><button type="button" className="default-button nav-button">Start your adventure!</button></NavLink>
      <NavLink to="/solarSystem"><button type="button" className="default-button nav-button">View the Solar System!</button></NavLink>
    </div>
  );
};

export default HomePage;
