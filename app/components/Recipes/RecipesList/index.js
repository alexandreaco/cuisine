import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../Recipe';

class RecipesList extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="recipes__list">
        {this.props.recipes.map(function(recipe) {
          return (
            <Recipe
              key={recipe._id}
              name={recipe.name}
              content={recipe.content}
            />
          );
        })}
      </div>
    );
  }
}

export default connect()(RecipesList);
