/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'rsuite';
import { changeSpeed } from '../actions';
// import { NavLink } from 'react-router-dom';

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    };
  }

  render() {
    return (
      <div className="mainpage">
        Solar System Page!

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

export default connect(null, { changeSpeed })(SolarSystem);
