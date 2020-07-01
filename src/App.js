import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/welcome';
import Quiz from './components/quiz';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Container>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/quiz" component={Quiz}/>
            </Switch>
          </Container>
        </div>
    </BrowserRouter>
  );
}

export default App;
