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
      sizeFactor = window.innerWidth/70,
    };
  }

  componentDidMount() {
    this.props.getPlanets();
  }

  handleCreatePlanet = () => {
    this.props.createPlanet();
  }

  createSystem = () => {
    html = "<div className='all-planets'>";
    for (id = 1; id < 9; id++) {
      html += `<SystemPlanet sizeFactor=${this.state.sizeFactor} id=${id}/>`
    }
    html += "</div>";
    return html;
  }

  render() {
    return (
      <div className="mainpage">
        Solar System Page!
        <button type="button" className="default-button nav-button" onClick={this.handleCreatePlanet}>Create new planet</button> {/* Button to create arbitrary planet */}
        { this.createSystem() }
        <div className='speed-slider'>
          <div>Orbit Speed</div>
          <Slider defaultValue={100}
          min={0}
          step={20}
          max={200}
          graduated
          progress
          onChange={(value) => this.props.changeSpeed(200 - value)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    planets: reduxState.planets.all,
  };
};

export default connect(mapStateToProps, { getPlanets, createPlanet, changeSpeed })(SolarSystem);
