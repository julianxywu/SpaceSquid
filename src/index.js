
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import App from './components/app';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);


// // change require to es6 import style
// // import $ from 'jquery';
// import './style.scss';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router, Route, NavLink, Switch,
// } from 'react-router-dom';


// // const $num = 0;

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };
// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// const App = (props) => {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/about" component={About} />
//           <Route exact path="/test/:id" component={Test} />
//           <Route component={FallBack} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

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

// ReactDOM.render(<App />, document.getElementById('main'));


// function incrementTime() {
//   $num += 1;
//   $('#main').html(`You've been on this page for ${$num} seconds..`);
// }

// setInterval(incrementTime, 1000);
