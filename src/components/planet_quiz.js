/* React imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Custom imports */
import '../style/planetquiz.scss';
import { getPlanet } from '../actions/planetApi';
import TopBarNav from './topBarNav';


class PlanetQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ['Our Sun is composed primarily of which element?',
        'What type of core does Mercury have?',
        'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20',
      ],
      answers: [['Hydrogen', 'Oxygen', 'Helium', 'Argon'],
        ['A metallic core', 'A liquid core', 'A very small core', 'A gaseous core'],
        ['A31', 'A32', 'A33', 'A34'],
        ['A41', 'A42', 'A43', 'A44'],
        ['A51', 'A52', 'A53', 'A54'],
        ['A61', 'A62', 'A63', 'A64'],
        ['A71', 'A72', 'A73', 'A74'],
        ['A81', 'A82', 'A83', 'A84'],
        ['A91', 'A92', 'A93', 'A94'],
        ['A101', 'A102', 'A103', 'A104'],
        ['A111', 'A112', 'A113', 'A114'],
        ['A121', 'A122', 'A123', 'A124'],
        ['A131', 'A132', 'A133', 'A134'],
        ['A141', 'A142', 'A143', 'A144'],
        ['A151', 'A152', 'A153', 'A154'],
        ['A161', 'A162', 'A163', 'A164'],
        ['A171', 'A172', 'A173', 'A174'],
        ['A181', 'A182', 'A183', 'A184'],
        ['A191', 'A192', 'A193', 'A194'],
        ['A201', 'A202', 'A203', 'A204'],
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
    return order.map((index) => <label><input type="radio" name={id} value={answers[index]} />{answers[index]}</label>);
  }

  render() {
    const questionNumbers = this.getRandomNumbers(20, 10);
    let counter = 0;
    return (
      <div className="main-container">
        <TopBarNav />
        <div className="quiz-container">
          {questionNumbers.map((number) => {
            counter += 1;
            return (
              <div key={number} className="q-and-a">
                <div className="question">
                  {counter}. {this.state.questions[number]}
                </div>
                <div className="answers">{this.randomizeAnswers(this.state.answers[number], number)}</div>
              </div>
            );
          })}
          <button type="button" className="continue-button"> Take another quiz! </button>
          <button type="button" className="continue-button"> Check out the solar system! </button>
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
