/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextLoop from 'react-text-loop';

/* Custom imports */
import '../style/planet.scss';
import PlanetModel from './planet_model';
import { getPlanet } from '../actions/planetApi';
import TopBarNav from './topBarNav';

class Planet extends Component {
  componentDidMount() {
    this.props.getPlanet(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.getPlanet(this.props.match.params.id);
    }
  }

  handleNextPlanet = () => {
    const nextID = this.props.planet[0].id + 1;
    if (nextID === 10) {
      const nextPlanetLink = '/planets/quiz';
      this.props.history.push(nextPlanetLink);
    } else {
      const nextPlanetLink = `/planets/${nextID}`;
      this.props.history.push(nextPlanetLink);
      window.location.reload();
    }
  }

  render() {
    if (this.props.planet.length > 0) {
      const currentPlanet = this.props.planet[0];
      const massEnding = currentPlanet.mass.substring(currentPlanet.mass.length - 2, currentPlanet.mass.length);
      return (
        <div className="main-container-planet">
          <TopBarNav />
          {/* {modalShowing ? this.renderModal(currentPlanet) : ''} */}
          <div className="planet-info">
            <div className="planet-title">
              {currentPlanet.planetName}
            </div>
            <div className="planet-summary">
              <text is="webview"> Distance from the Sun | <span> {currentPlanet.distanceFromSun} AU </span> </text>
              <text is="webview"> Diameter | <span> {currentPlanet.diameter} km </span> </text>
              <text is="webview"> Mass | <span> {currentPlanet.mass.substring(0, currentPlanet.mass.length - 3)}<sup> {massEnding} </sup> kg </span> </text>
              <text is="webview"> Density | <span> {currentPlanet.density} g/cm <sup> 3 </sup> </span>
              </text>
              <text is="webview"> Orbital Eccentricity | <span> {currentPlanet.orbitalEccentricity} </span> </text>
              <text is="webview"> Orbital Inclination | <span> {currentPlanet.orbitalInclination} degrees </span> </text>
              <text is="webview"> Axis Tilt | <span> {currentPlanet.spinAxisTilt} degrees </span> </text>
              <text is="webview"> Rotation Period | <span> {currentPlanet.rotationDays} days </span> </text>
              <text is="webview"> Orbital Period Around the Sun | <span> {currentPlanet.orbitalPeriodAroundSun} days </span> </text>
              <text is="webview"> Atmosphere Composition | <span> {currentPlanet.atmosphereComposition} </span> </text>
              <text is="webview"> Interior Structure | <span> {currentPlanet.interiorStructure} </span> </text>
              <text is="webview"> Number of Moons | <span> {currentPlanet.numberOfMoons} </span> </text>
              <text is="webview"> Significant Satellites | <span> {currentPlanet.significantSatellites} </span></text>
              <button type="button" onClick={this.handleNextPlanet} className="continue-button"> Continue </button>
            </div>
          </div>
          <div className="planet-model">
            <PlanetModel planetName={currentPlanet.planetName} />
            <div className="planet-funfacts">
              <TextLoop className="textloop" interval={3000}>
                {currentPlanet.summary.map((item) => <div className="fact">Fun fact: {item}</div>)}
              </TextLoop>
            </div>
            {/* <button type="button" className="default-button nav-button" onClick={this.handleGetPlanet}>Get planet</button> */}
          </div>

        </div>
      );
    } else {
      return (
        <div> Nothing </div>
      );
    }
  }
}

const mapStateToProps = (reduxState) => {
  return {
    planet: reduxState.planet.current,
  };
};


export default withRouter(connect(mapStateToProps, { getPlanet })(Planet));
