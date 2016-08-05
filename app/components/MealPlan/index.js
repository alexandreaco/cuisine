import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class MealPlan extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="mealPlan">
        <div className="mealPlan__header">
          <h1>MealPlan</h1>
        </div>
      </div>
    )
  }
}

export default connect()(MealPlan);
