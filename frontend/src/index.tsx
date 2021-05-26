import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VideoForm } from './components';
import { VideosList } from './components';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={ VideosList } />
        <Route exact path="/video-form" component={ VideoForm } />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
