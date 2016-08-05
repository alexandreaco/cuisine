import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  getIngredients,
} from '../../actions';

import IngredientsList from './IngredientsList';
import NewIngredient from './NewIngredient';
import IngredientButtons from './IngredientButtons';

class Ingredients extends Component {

  constructor() {
    super();
  }

  render() {
   const { view } = this.props;
    return (
      <div className="ingredients">
        <div className="ingredients__header">
          <h1>Ingredients</h1>
        </div>
        <IngredientsList />
        <div>
          { view != 'addIngredient' && <IngredientButtons /> }
          { view == 'addIngredient' && <NewIngredient type="undecided"
              name="name"
              cost="cost"
              unit="unit"
              type="undecided" />
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  view: state.view,
}))(Ingredients);
