import React, { Component } from 'react';
import { connect } from 'react-redux';

import StaticIngredient from '../../Ingredients/Ingredient/StaticIngredient';

class ActiveRecipe extends Component {

  constructor() {
    super();
  }

  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe__active">
        <div className="recipe__name">{ recipe.name }</div>
        <div className="recipe__content">{ recipe.content }</div>
        <div className="recipe__ingredients">
          {this.props.recipe.ingredients.map(function(ingredient) {
            return (
              <StaticIngredient
                key={ ingredient._id }
                name={ ingredient.name }
                cost={ ingredient.cost }
                unit={ ingredient.unit }
                type={ ingredient.type } />
            );
          })}
        </div>
      </div>
    )
  }
}

export default connect()(ActiveRecipe);
