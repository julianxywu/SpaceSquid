import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlanet } from '../actions/planetApi';

class SystemPlanet extends Component {
  constructor(props) {
    super(props);
    // grab the planet
    console.log(this.props);
    // nothing else needs to know this planet's information, renders itself
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      angle: 0,
      day: 1,
    };
  }

  componentDidMount() {
    setInterval(() => this.simpleOrbiting(), this.props.speed);
  }

  // increase the x/y by one day's movement
  simpleOrbiting = () => {
    // determine amount moved
    // eslint-disable-next-line no-mixed-operators
    const currentDayState = this.state.day;

    const orbit = this.props.orbitalPeriodAroundSun;
    // change to radians
    // eslint-disable-next-line no-mixed-operators
    const a = (360 / orbit) * currentDayState * Math.PI / 180;
    // transform from polar to x/y
    const newDay = (currentDayState === orbit) ? 1 : currentDayState + 1;
    this.setState(
      {
        // eslint-disable-next-line react/no-unused-state
        angle: a,
        day: newDay,
      },
    );
  }

  // renderClick() {
  //   console.log(this.props.planet);
  // }

  render() {
    // to AU, then to pixels. Scaled up by 5 so we can see it
    // eslint-disable-next-line no-mixed-operators
    let diameter = Math.ceil(this.props.diameter / (1.496 * 10 ** 8) * this.props.sizeFactor * 1000);
    if (diameter < 2) diameter = 2;
    // console.log(diameter);
    // AU to pixels
    const dist = this.props.distanceFromSun * this.props.sizeFactor + 40;

    const x = (dist * Math.sin(this.state.angle));
    const y = (dist * Math.cos(this.state.angle));

    const width = window.innerWidth;
    const height = window.innerHeight;

    const { planetColor } = this.props;


    return (
      <div className="planet"
        style={{
          position: 'absolute',
          top: ((height - diameter) / 2) + y,
          left: ((width - diameter) / 2) + x,
        }}
      >
        <div className="planet-object"
          style={{
            backgroundColor: planetColor,
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
          }}
        />
        {/* <div className="planet-name">{this.props.planetName}</div> */}
        {/* <button type="button" onClick={this.renderClick}>Check state</button> */}

      </div>

    );
  }
}

const mapStateToProps = (reduxState) => ({
  // milliseconds to Earth day
  speed: reduxState.system.speed,
});

export default connect(mapStateToProps, { getPlanet })(SystemPlanet);
