import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ingredient from '../Ingredient';
import { getIngredients } from '../../../actions';

class IngredientsList extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getIngredients());
  }

  render() {
    return (
      <div className="ingredients__list">
        {this.props.ingredients.map(function(ingredient) {
          return <Ingredient
                    key={ingredient._id}
                    id={ingredient._id}
                    name={ingredient.name}
                    cost={ingredient.cost}
                    unit={ingredient.unit}
                    type={ingredient.type} />;
        })}
      </div>
    )
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
}))(IngredientsList);
