/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Custom imports
import '../style/solarsystem.scss';
import SystemPlanet from './system_planet';
import { getPlanets, createPlanet } from '../actions/planetApi';

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // AU to pixels
      sizeFactor: window.innerWidth / 120,
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
    const sunDiameter = 60;
    return (
      <div className="main-container">
        <div className="all-planets">
          <div className="solar-system-title">
            <p> Our Solar System </p>
            <NavLink to="/"><button type="button" className="default-button nav-button">Back to Homepage</button></NavLink>
          </div>
          <div className="all-planets-infoBar">
            <h1> Notes: </h1>
            <p>1. The size of the planets are scaled up 1000 times so that they are visible at this scale!</p>
            <p>2. Each second is equal to 20 Earth days!</p>
            <p>3. The size of the Sun is not accurate -- if it were to scale, the whole page would be yellow!</p>
          </div>
          <div className="all-planets-infoName">
            <p style={{ color: '#504E51' }}> Mercury </p>
            <p style={{ color: '#D3A567' }}> Venus </p>
            <p style={{ color: '#344277' }}> Earth </p>
            <p style={{ color: '#E27B58' }}> Mars </p>
            <p style={{ color: '#C88B3A' }}> Jupiter </p>
            <p style={{ color: '#7B7869' }}> Saturn </p>
            <p style={{ color: '#BBE1E4' }}> Uranus </p>
            <p style={{ color: '#3E54E8' }}> Neptune </p>
          </div>
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
            // console.log(currentPlanet);
            if (currentPlanet.id === 1) return null;
            return (
              <SystemPlanet
                key={currentPlanet.id}
                sizeFactor={this.state.sizeFactor}
                planetId={currentPlanet.id}
                planetColor={currentPlanet.color}
                diameter={currentPlanet.diameter}
                distanceFromSun={currentPlanet.distanceFromSun}
                orbitalPeriodAroundSun={currentPlanet.orbitalPeriodAroundSun}
                planetName={currentPlanet.planetName}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  planet: reduxState.planet.all,
});

export default connect(mapStateToProps, {
  getPlanets, createPlanet, SystemPlanet,
})(SolarSystem);
