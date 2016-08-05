import React, { Component } from 'react';
import { connect } from 'react-redux';

import Recipe from '../Recipe';
import { getRecipes } from '../../../actions';

class RecipesList extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());
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

export default connect(state => ({
  recipes: state.recipes,
}))(RecipesList);
