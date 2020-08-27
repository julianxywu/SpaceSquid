// change require to es6 import style
// import $ from 'jquery';
import '../style/app.scss';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

/* Custom Imports */
import HomePage from './homepage';
import Planet from './planet';
import PlanetWelcome from './planet_welcome';
import SolarSystem from './solar_system';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/planetWelcome" component={PlanetWelcome} />
        <Route exact path="/planets/:id" component={Planet} />
        <Route exact path="/solarSystem" component={SolarSystem} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

export default App;
