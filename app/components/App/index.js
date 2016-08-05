import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>Hello!</h1>
        <Navigation />
      </div>
    )
  }
}

export default App;
