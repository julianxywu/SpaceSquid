/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanet } from '../actions/planetApi';
// import { NavLink } from 'react-router-dom';

/* Custom imports */

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

handleGetPlanet = () => {
  this.props.getPlanet(2);
}

render() {
  return (
    <div className="mainpage">
      Planet page info!
      <button type="button" className="default-button nav-button" onClick={this.handleGetPlanet}>Get planet</button>
    </div>
  );
}
}

const mapStateToProps = (reduxState) => {
  return {
    planets: reduxState.planets.all,
  };
};


export default connect(mapStateToProps, { getPlanet })(Planet);
