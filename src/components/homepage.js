/* React imports */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/* Custom imports */
import '../style/homepage.scss';
import { getPlanets } from '../actions/planetApi';
// import spaceSquid from '../img/spaceSquid2.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getPlanets();
  }

  handleGetPlanets = () => {
    this.props.getPlanets();
  }

  render() {
    return (
      <div className="main-container">
        <div className="title-container">
          <div className="title"> Space Squid </div>
          {/* <div className="squidLogo">
            <img src={spaceSquid} alt="Logo" />;
          </div> */}
          <div className="content"> A short, interactive, guide to our solar system and beyond </div>
        </div>
        <div className="button-area">
          <NavLink to="/planetWelcome"><button type="button" className="default-button nav-button">Start your exploration!</button></NavLink>
          <NavLink to="/solarSystem">
            <button type="button" className="default-button nav-button">
              View the Solar System!
            </button>
          </NavLink>
          {/* <button type="button" className="default-button nav-button" onClick={this.handleGetPlanets}>Get planets</button> */}
        </div>
        <div className="created-by">
          Created by: Alex Hamel, Kai Frey, Julian Wu
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  planet: reduxState.planet.all,
});

export default connect(mapStateToProps, { getPlanets })(HomePage);
