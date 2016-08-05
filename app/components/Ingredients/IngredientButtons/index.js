import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  setView,
} from '../../../actions';

class IngredientButtons extends Component {

  constructor() {
    super();
  }

  addNewIngredient() {
    this.props.dispatch(setView('addIngredient'));
  }

  cancel() {
    this.props.dispatch(setView('default'));
  }

  render() {
   const { view } = this.props;
    return (
      <div className="ingredients__buttons">
        { view !== 'addIngredient' && <button onClick={ () => this.addNewIngredient() }>Add New</button> }
        { view == 'addIngredient' && <button onClick={ () => this.cancel() }>Cancel</button>}
      </div>
    )
  }
}

export default connect(state => ({
  view: state.view,
}))(IngredientButtons);
