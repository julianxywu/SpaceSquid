/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Map } from 'immutable';

/* Custom imports */
import '../style/planet.scss';
import { getPlanet } from '../actions/planetApi';
import TopBarNav from './topBarNav';

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentPlanet: null,
    };
  }

  componentDidMount() {
    this.props.getPlanet(this.props.match.params.id);
    // this.handleGetPlanet();
    // this.setState({ currentPlanet: this.props.planet[0] });
  }


  handleGetPlanet = () => {
    // this.props.planet.map((currentPlanet) => {
    //   console.log(currentPlanet);
    //   return (
    //     this.setState({ currentPlanet })
    //   );
    // });
    console.log(this.props);
    // console.log(this.state.currentPlanet);
  }

  render() {
    if (this.props.planet.length > 0) {
      const currentPlanet = this.props.planet[0];
      return (
        <div className="main-container">
          <TopBarNav />
          {/* {this.props.planet.map((currentPlanet) => {
          console.log(currentPlanet);
          return ( */}
          <>
            <div className="planet-info">
              <div className="planet-title">
                {currentPlanet.planetName}
              </div>
              <div className="planet-summary">
                Distance from the Sun: {currentPlanet.distanceFromSun} AU {'\n'}
                Diameter: {currentPlanet.diameter} km {'\n'}
                Mass: {currentPlanet.mass} kg {'\n'}
                Density: {currentPlanet.density} {'\n'}
                Atmosphere Thickness: {currentPlanet.atmosphereThickness} {'\n'}
                Atmosphere Composition: {currentPlanet.atmosphereComposition} {'\n'}
                Interior Structure: {currentPlanet.interiorStructure} {'\n'}
                Orbital Eccentricity: {currentPlanet.orbitalEccentricity} {'\n'}
                Orbital Inclination: {currentPlanet.orbitalInclination} {'\n'}
                Axis Tilt: {currentPlanet.spinAxisTilt} {'\n'}
                Rotation Period: {currentPlanet.rotationDays} {'\n'}
                Orbital Period Around the Sun: {currentPlanet.orbitalPeriodAroundSun} {'\n'}
                Number of Moons: {currentPlanet.numberOfMoons} {'\n'}
              </div>
              <div className="planet-funfacts">
                Fun facts: {currentPlanet.summary} {'\n'}
              </div>
            </div>
            <div className="planet-model">
              MODEL HERE
            </div>
            <button type="button" className="default-button nav-button" onClick={this.handleGetPlanet}>Get planet</button>
          </>
          {/* );
        })} */}
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
