/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'rsuite';
import { changeSpeed } from '../actions';

import SystemPlanet from './system_planet';
// import { NavLink } from 'react-router-dom';
import { getPlanets, createPlanet } from '../actions/planetApi';

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // AU to pixels
      sizeFactor: window.innerWidth / 70,
    };
  }

  componentDidMount() {
    this.props.getPlanets();
  }

  handleCreatePlanet = () => {
    // this.props.createPlanet();
    console.log(this.props);
    console.log(this.props.planet);
  }

  render() {
    return (
      <div className="mainpage">
        Solar System Page!
        <button type="button" className="default-button nav-button" onClick={this.handleCreatePlanet}>Create new planet</button> {/* Button to create arbitrary planet */}
        {this.props.planet.map((currentPlanet) => { // get each planet and create a SystemPlanet for it
          console.log(currentPlanet);
          return (
            <div className="all-planets" key={currentPlanet.id}>
              <SystemPlanet
                sizeFactor={this.state.sizeFactor}
                planetId={currentPlanet.id}
                diameter={currentPlanet.diameter}
                distanceFromSun={currentPlanet.distanceFromSun}
                orbitalEccentricity={currentPlanet.orbitalEccentricity}
                orbitalPeriodAroundSun={currentPlanet.orbitalPeriodAroundSun}
                planetName={currentPlanet.planetName}
              />
            </div>
          );
        })}
        <div className="speed-slider">
          <div>Orbit Speed</div>
          <Slider defaultValue={100}
            min={0}
            step={20}
            max={200}
            graduated
            progress
            onChange={(value) => this.props.changeSpeed(200 - value)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  planet: reduxState.planet.all,
});

export default connect(mapStateToProps, {
  getPlanets, createPlanet, changeSpeed, SystemPlanet,
})(SolarSystem);
