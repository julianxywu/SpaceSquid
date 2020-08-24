import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlanet } from '../actions';

class SystemPlanet extends Component {
  constructor(props) {
    super(props);
    // grab the planet
    getPlanet(this.props.planetId);
    // nothing else needs to know this planet's information, renders itself
    this.state = {
      angle: 0,
      day: 0,
    };
  }

  componentDidMount() {
    setInterval(() => this.simpleOrbiting(), this.props.speed);
  }

  // increase the x/y by one day's movement
  simpleOrbiting = () => {
    // determine amount moved
    const a = 360/this.props.orbitalPeriodAroundSun * this.state.day;
    // transform from polar to x/y
    this.setState((prevState) => ({
      angle: a,
      day:  prevState + 1,
    }));
  }

  render() {
    // to AU, then to pixels
    const diameter = Math.ceil(this.props.diameter/(1.496 * Math.pow(10, 8)) * this.props.sizeFactor);
    // AU to pixels
    const dist = props.distanceFromSun * this.props.sizeFactor;

    const x  = ((1 + this.props.orbitalEccentricity) * dist * Math.sin(this.state.angle));
    const y = ((1 - this.props.orbitalEccentricity) * dist * Math.cos(this.state.angle));
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
      <div className='planet'>
        <div className={this.props.planetName}
        style={{color: this.props.color,
        width: diameter,
        height: diameter,
        borderRadius: diameter/2,
        position: absolute,
        top: (height - diameter/2) + y, 
        left: (width - diameter/2) + x}}/>
      </div>
      
    );
  }
}

const mapStateToProps = (reduxState) => ({
  // milliseconds to Earth day
  speed: reduxState.system.speed,
  // AU to pixels
  sizeFactor: reduxState.system.sizeFactor,
  // size to display
  totalAU: reduxState.system.totalAU,
});

export default connect(mapStateToProps, { getPlanet })(SystemPlanet);