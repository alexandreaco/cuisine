import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecipes } from '../../../actions';

class RecipesList extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());
  }

  render() {
    console.info(this.props.recipes);
    return (
    <div className="recipes__list">
      {this.props.recipes.map(function(recipe) {
        return recipe.name;
      })}
    </div>
    );
  }
}

export default connect(state => ({
  recipes: state.recipes,
}))(RecipesList);
