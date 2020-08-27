/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'rsuite';

// Custom imports
import '../style/solarsystem.scss';
import SystemPlanet from './system_planet';
import { changeSpeed } from '../actions';
import { getPlanets, createPlanet } from '../actions/planetApi';

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // AU to pixels
      sizeFactor: window.innerWidth / 20,
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
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sunDiameter = 40;
    return (
      <div className="main-container">
        Solar System TITLE!
        <div className="all-planets">
          <div className="sun"
            style={{
              width: sunDiameter,
              height: sunDiameter,
              top: (height - sunDiameter) / 2,
              left: (width - sunDiameter) / 2,
              borderRadius: sunDiameter / 2,
            }}
          />
          {/* <button type="button" className="default-button nav-button" onClick={this.handleCreatePlanet}>Create new planet</button> Button to create arbitrary planet */}
          {this.props.planet.map((currentPlanet) => { // get each planet and create a SystemPlanet for it
            console.log(currentPlanet);
            if (currentPlanet.id === 1) return null;
            return (
              <SystemPlanet
                key={currentPlanet.id}
                sizeFactor={this.state.sizeFactor}
                planetId={currentPlanet.id}
                diameter={currentPlanet.diameter}
                distanceFromSun={currentPlanet.distanceFromSun}
                orbitalEccentricity={currentPlanet.orbitalEccentricity}
                orbitalPeriodAroundSun={currentPlanet.orbitalPeriodAroundSun}
                planetName={currentPlanet.planetName}
              />
            );
          })}
        </div>
        <div className="speed-slider">
          <div>Orbit Speed</div>
          <Slider defaultValue={70}
            min={0}
            step={10}
            max={100}
            graduated
            progress
            onChange={(value) => this.props.changeSpeed(100 - value)}
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
