import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import HeroContainer from './src/containers/HeroContainer.jsx';

import './src/stylesheets/main.scss';

const logger = createLogger({
  collapsed: true
});
let createStoreWithMiddleware;

  createStoreWithMiddleware = createStore(
    reducers,
    compose(applyMiddleware(logger))
  );

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render((
    <Provider store={createStoreWithMiddleware}>
      <HeroContainer/>
    </Provider>
  ), document.getElementById('app'));
});