/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      </div>
    );
  }
}

export default connect(null, null)(SolarSystem);
