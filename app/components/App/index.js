import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ingredients from '../Ingredients';
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
        <Navigation />
        { section == 'mealPlan' && <MealPlan /> }
        { section == 'recipes' && <Recipes /> }
        { section == 'ingredients' && <Ingredients /> }
      </div>
    )
  }
}

export default connect(state => ({
  section: state.section,
}))(App);
