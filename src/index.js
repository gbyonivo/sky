import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import FootballEventsMenu from './components/footballEventsMenu';

import reducer from './reducers';
import mySaga from './sagas/footballEventsSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);


ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <div>
      <Route path="/" component={FootballEventsMenu} />
    </div>
  </BrowserRouter>
</Provider>, document.getElementById('index')); //eslint-disable-line