// Import Dependencies.
import React from 'react';
import { Route } from 'react-router-dom'

// Import Scences.
import MainScene from '../scenes/main/index.jsx';

// Set up routes.
const routes = (
  <div>
    <Route exact path='/' component={MainScene}/>
  </div>
);

export default routes;
