import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipesList from './RecipesList';

class Recipes extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="recipes">
        <div className="recipes__header">
          <h1>Recipes</h1>
        </div>
        <RecipesList />
      </div>
    )
  }
}

export default connect()(Recipes);
