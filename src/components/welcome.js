import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Welcome extends Component {

  handleClick = () => {
    this.props.history.push("/quiz");
  }

  render() {
    return (
      <Card className="text-center">
        <Card.Header>Regex Quiz</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Regex Quiz</Card.Title>
          <Card.Text>
          In the following parts we will go through some fun challenges to test and learn JS regex and its capabilities.
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Continue</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Welcome;
  