/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { getPlanets, createPlanet } from '../actions/planetApi';

class SolarSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.getPlanets();
  }

  handleCreatePlanet = () => {
    this.props.createPlanet();
  }

  render() {
    return (
      <div className="mainpage">
        Solar System Page!
        <button type="button" className="default-button nav-button" onClick={this.handleCreatePlanet}>Create new planet</button>
        {/* <div>
          {this.props.getPlanet(1)}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    planets: reduxState.planets.all,
  };
};

export default connect(mapStateToProps, { getPlanets, createPlanet })(SolarSystem);
