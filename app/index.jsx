// NOTE: This is a hacky way to shut hot reload logging the FUCK up.
(function(global) {
  var console_log = global.console.log;
  global.console.log = function() {
    if (!(arguments.length == 1 && typeof arguments[0] === 'string'
      && arguments[0].match(/^\[(HMR|WDS)\]/))) {
      console_log.apply(global.console, arguments);
    }
  }
})(window);

// React dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers'

let store = createStore(app);

console.log(store);

// Import scences.
import routes from './routes/index.js';

// Import global components.
import Container from './components/container/index.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Router>{routes}</Router>
    </Container>
  </Provider>,
  document.getElementById('application')
);

// Accept hot reload.
if (module.hot) {
  module.hot.accept();
}
