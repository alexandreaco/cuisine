import React, { Component } from 'react';
import { connect } from 'react-redux';

import StaticIngredient from '../../Ingredients/Ingredient/StaticIngredient';

class ActiveRecipe extends Component {

  constructor() {
    super();
  }

  willReceiveNewProps() {
    console.log(this.props.activeRecipe)
  }

  render() {
    const { activeRecipe } = this.props;
    return (
      <div className="recipe__active">
        <div className="recipe__name">{ activeRecipe.name }</div>
        <div className="recipe__content">{ activeRecipe.content }</div>
        <div className="recipe__ingredients">
          {activeRecipe.ingredients && activeRecipe.ingredients.map(function(ingredient) {
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

export default connect(state => ({
  activeRecipe: state.activeRecipe,
}))(ActiveRecipe);
