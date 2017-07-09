import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './reducers/allReducer.js';
import { Provider } from 'react-redux';
import  Home from './components/Home';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk, logger));



export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
