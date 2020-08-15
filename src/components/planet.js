/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

/* Custom imports */

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="mainpage">
        Planet page info!
      </div>
    );
  }
}

export default connect(null, null)(Planet);
