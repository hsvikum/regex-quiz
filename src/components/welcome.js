import React, { Component } from 'react';
import '../styles/welcome.css';
import { Button } from 'primereact/button';

class Welcome extends Component {

  handleClick = () => {
    this.props.history.push("/quiz");
  }

  render() {
    return (
      <div className="welcome center glass">
          <h1>
              Regex Quiz
          </h1>
          <p>
              Welcome to Regex Quiz. In the following parts we will go through some fun challenges to test and learn JS regex and its capabilities.
          </p>
          <Button label="Continue" className="p-button-raised" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Welcome;
  