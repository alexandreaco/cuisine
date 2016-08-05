import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveRecipe } from '../../../actions';

import Recipe from '../Recipe';

class RecipesList extends Component {

  constructor() {
    super();
  }

  setActiveRecipe = (index) => {
    const { dispatch, _id, recipes } = this.props;
    this.props.dispatch(setActiveRecipe(recipes[index]));
  }

  render() {
    return (
      <div className="recipes__list">
        {this.props.recipes.map((recipe, i) => {
          return (
            <Recipe
              key={recipe._id}
              name={recipe.name}
              content={recipe.content}
              index={i}
              clickEvent={this.setActiveRecipe}
            />
          );
        })}
      </div>
    );
  }
}

export default connect()(RecipesList);
