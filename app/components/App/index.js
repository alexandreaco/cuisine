import React, { Component } from 'react';
import { connect } from 'react-redux';

import MealPlan from '../MealPlan';
import Navigation from './Navigation';
import Recipes from '../Recipes';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    const { section } = this.props;
    return (
      <div className="container">
        <h1>Hello!</h1>
        <Navigation />
        { section == 'mealPlan' && <MealPlan /> }
        { section == 'recipes' && <Recipes /> }
      </div>
    )
  }
}

export default App;
