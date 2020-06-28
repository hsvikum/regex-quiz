import React from 'react';
import './styles/App.css';
import 'primereact/resources/themes/nova-colored/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/welcome';
import Quiz from './components/quiz';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/quiz" component={Quiz}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
