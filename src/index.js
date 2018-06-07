import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FootballEventsMenu from './components/footballEventsMenu';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route path="/" component={FootballEventsMenu}/>
  </div>
</BrowserRouter>, document.getElementById('index')); //eslint-disable-line