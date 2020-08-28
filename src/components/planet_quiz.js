/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

/* Custom imports */
import '../style/planetquiz.scss';
import { getPlanet } from '../actions/planetApi';
import TopBarNav from './topBarNav';


class PlanetQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShowing: false,
      grade: 0,
      questions: ['Our Sun is composed primarily of which element?',
        'What type of core does Mercury have?',
        'What rocky planet has an atmosphere so thick you can not the surface?',
        'Which of these is not Unique to Earth?',
        'What is significant to Olympus Mons on Mars?',
        'Which one of these is not a moon of Jupiter?',
        'What is the current estimate to the age of the rings of Saturn?',
        'What gas causes the blue coloring of Uranus?',
        'How many AU is Neptune from the Sun?',
        'How long does it take light from the Sun to reach Earth?',
        'Mercury is 1/3 the size of Earth, yet has _______ similar to Earth.',
        'What do Mercury and Venus have in common?',
        'Which rocky planet is the densest?',
        'The Big Red Spot on Jupiter has been estimated to be raging for?',
        'Which planet has the most moons?',
        'Which outer planet does not radiate more heat than it absorbs?',
        'Which planet besides Earth has the highest chance of having liquid water on its surface?',
        'Neptune has a gravity most similar to _______.',
        'Which planet has an orbital inclination of about 90 degrees?',
        'This planet is the only planet that rotates clockwise in our solar system.',
      ],
      answers: [['Hydrogen', 'Oxygen', 'Helium', 'Argon'],
        ['A metallic core', 'A liquid core', 'A very small core', 'A gaseous core'],
        ['Venus', 'Mercury', 'Earth', 'Mars'],
        ['An atmosphere', 'Only planet not named after a god', 'Plate Tectonics', 'Life'],
        ['Tallest known mountain in our solar system', 'Contains liquid water at the peak', 'Evidence of plate tectonics today', 'Was discovered by the Greeks'],
        ['Titan', 'Io', 'Europa', 'Ganymede'],
        ['~100 Million Years', '~4.5 Billion Years', '~500 Million Years', '~2 Billion Years'],
        ['Methane', 'Hydrogen', 'Helium', 'Water Vapor'],
        ['30 AU', '15 AU', '50 AU', '40 AU'],
        ['8 minutes', '1 hour', '34 seconds', '47 minutes'],
        ['a metallic core size', 'an atmosphere', 'plate tectonics', 'a diameter'],
        ['Days longer than their years', 'Atmosphere', 'Mantle', 'Clockwise rotation'],
        ['Earth', 'Venus', 'Mars', 'Mercury'],
        ['~150 years', '~300 years', '~25 years', '~5000 years'],
        ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
        ['Uranus', 'Neptune', 'Saturn', 'Jupiter'],
        ['Mars', 'Mercury', 'Venus', 'Jupiter'],
        ['Earth', 'Jupiter', 'Saturn', 'Uranus'],
        ['Uranus', 'Neptune', 'Jupiter', 'Venus'],
        ['Venus', 'Mercury', 'Uranus', 'Mars'],
      ],
    };
  }

  componentDidMount() {
    this.props.getPlanet(this.props.match.params.id);
    console.log(this.state.questions);
    console.log(this.state.answers);
    // this.handleGetPlanet();
    // this.setState({ currentPlanet: this.props.planet[0] });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.getPlanet(this.props.match.params.id);
    }
  }

  getRandomNumbers = (inputlength, outputlength) => {
    const numberList = [];
    while (numberList.length < outputlength) {
      const randomInt = Math.floor(Math.random() * inputlength);
      if (numberList.indexOf(randomInt) === -1) {
        numberList.push(randomInt);
      }
    }
    console.log(numberList);
    return numberList;
  }

  randomizeAnswers = (answers, id) => {
    const order = this.getRandomNumbers(4, 4);
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    return order.map((index) => <label key={index}><input type="radio" name={id} value={index} />{answers[index]}</label>);
  }

  onGrade = (event) => {
    let grade = 0;

    $('input[type=\'radio\']:checked').map((i, radio) => {
      const value = $(radio).val();
      if (value === '0') {
        grade += 1;
      }
      return (
        ''
      );
    });
    this.setState({ grade });
    this.showModal();
  }

  showModal = () => {
    this.setState({ modalShowing: true });
  }

  hideModal = () => {
    this.setState({ modalShowing: false });
  }

  reloadPage = () => {
    window.location.reload();
  }

  goToSolarSystem = () => {
    this.props.history.push('/solarSystem');
  }

  renderModal = () => {
    return (
      <div className="modal-screen">
        <div className="modal-container">
          <div className="grade">
            Score: { this.state.grade }/10
          </div>
          <button type="button" className="modal-button" onClick={this.reloadPage}> Take another quiz! </button>
          <button type="button" className="modal-button" onClick={this.goToSolarSystem}> Check out the solar system! </button>
        </div>
      </div>
    );
  }


  render() {
    const questionNumbers = this.getRandomNumbers(20, 10);
    let counter = 0;
    const { modalShowing } = this.state;
    return (
      <div className="main-container">
        <TopBarNav />
        {modalShowing ? this.renderModal() : ''}
        <div className="quiz-container">
          <div className="quiz-title">
            10 Question Quiz
          </div>
          {questionNumbers.map((number) => {
            counter += 1;
            return (
              <div key={number} className="q-and-a">
                <div className="question">
                  {counter}. {this.state.questions[number]}
                </div>
                <div className="answers">{this.randomizeAnswers(this.state.answers[number], counter)}</div>
              </div>
            );
          })}
          <button type="button" className="quiz-button" onClick={this.onGrade}> How did you do? </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    planet: reduxState.planet.current,
  };
};


export default withRouter(connect(mapStateToProps, { getPlanet })(PlanetQuiz));
