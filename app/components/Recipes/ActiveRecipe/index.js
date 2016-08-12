import React, { Component } from 'react';
import { connect } from 'react-redux';
var marked = require('marked');

import StaticIngredient from '../../Ingredients/Ingredient/StaticIngredient';

class ActiveRecipe extends Component {

  constructor() {
    super();
  }

  willReceiveNewProps() {
    // console.log(typeof this.props.activeRecipe)
  }

  render() {
    const { activeRecipe } = this.props;
    console.log(activeRecipe.content);
    return (
      <div className="recipe__active">
        <div className="recipe__name">{ activeRecipe.name }</div>

        <div className="recipe__content"
          dangerouslySetInnerHTML={{
            __html: marked(activeRecipe.content) }}></div>

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
