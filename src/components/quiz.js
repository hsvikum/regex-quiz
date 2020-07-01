import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuiz, previousQuiz } from '../state/actions/quizzesActions'
import { Button, Card, Row, Col, Form, InputGroup, FormControl, Table } from 'react-bootstrap';
import '../styles/Quiz.css'
import { Highlight } from 'react-highlight-regex';
import _ from 'lodash';

class Quiz extends Component {

  state = {
    ...this.props.quiz
  };

  componentDidUpdate(prevProps) {
    if (prevProps.quiz !== this.props.quiz) {
      this.setState({ ...this.props.quiz })
    }
  }

  handleNext = () => {
    this.props.goToNextQuiz(this.state)
  }

  handlePrevious = () => {
    this.props.goToPreviousQuiz(this.state)
  }

  onChangeRegex = (value) => {
    let newValue = this.state.answer;
    newValue.regex = value;
    this.setState({
      answer: newValue
    })
  }

  onChangeRegexFlag = (value) => {
    let newValue = this.state.answer;
    newValue.flag = value;
    this.setState({
      answer: newValue
    })
  }

  isSolved = (problem, solution, regex) => {
    try {
      let array = [...problem.matchAll(regex)];
      let primaryMatch = array.map(match => match[0]);
      return _.isEqual(_.sortBy(solution), _.sortBy(primaryMatch))
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  render() {
    return (
      <Card className="text-center">
        <Card.Header>Challenge {this.state.index + 1} of {this.props.quizCount}</Card.Header>
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>
            {this.state.body}
          </Card.Text>
          <Row className="justify-content-md-center">
            <Form inline>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  id="regex" 
                  placeholder="Regex Pattern" 
                  value={this.state.answer.regex} 
                  onChange={e => this.onChangeRegex(e.target.value)}
                />
                <InputGroup.Append>
                  <InputGroup.Text>/</InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                  id="regexFlag"
                  className="regexFlagSmallInput"
                  placeholder="flags"
                  value={this.state.answer.flag} 
                  onChange={e => this.onChangeRegexFlag(e.target.value)}
                />
              </InputGroup>
            </Form>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Challenge</th>
                <th>Match(s)</th>
                <th>Solved</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.challenges.map((challenge, i) => {
                  let regex = null;
                  try {
                    regex = new RegExp(this.state.answer.regex, this.state.answer.flag)
                  } catch (error) {
                    console.log(error);
                  }
                  return <tr key={i}>
                            <td>
                              { !!(this.state.answer.regex) && regex ? <Highlight match={regex} text={challenge.problem} highlightClassname="markSolution" /> : challenge.problem }                      
                            </td>
                            <td>{challenge.solution.join(", ")}</td>
                            <td>{!!(this.state.answer.regex) && regex && this.isSolved(challenge.problem, challenge.solution, regex) ? <span className="solved">Solved</span> : <span className="unsolved">Unsolved</span>}</td>
                         </tr>
                })
              }
            </tbody>
          </Table>
          <Row>
            <Col>
              {
                (!this.props.isFirst) &&
                <Button variant="primary" disabled={this.props.isFirst} onClick={this.handlePrevious}>Previous</Button>
              }
            </Col>
            <Col></Col>
            <Col>
              {(!this.props.isLast) &&
                <Button variant="success" onClick={this.handleNext}>Next</Button>
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    quiz: state.quizzes.quizzes[state.quizzes.currentQuiz],
    quizCount: Object.keys(state.quizzes.quizzes).length,
    isFirst: state.quizzes.currentQuiz === 0,
    isLast: state.quizzes.currentQuiz === Object.keys(state.quizzes.quizzes).length - 1,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToNextQuiz: (currentQuiz) => {
      dispatch(nextQuiz(currentQuiz))
    },
    goToPreviousQuiz: (currentQuiz) => {
      dispatch(previousQuiz(currentQuiz))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);  