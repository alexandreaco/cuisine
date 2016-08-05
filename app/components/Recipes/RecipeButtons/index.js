import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  setView,
} from '../../../actions';

class RecipeButtons extends Component {

  constructor() {
    super();
  }

  addNewRecipe() {
    this.props.dispatch(setView('addRecipe'));
  }

  cancel() {
    this.props.dispatch(setView('default'));
  }

  render() {
   const { view } = this.props;
    return (
      <div className="ingredients__buttons">
        { view !== 'addRecipe' && <button onClick={ () => this.addNewRecipe() }>Add New</button> }
        { view == 'addRecipe' && <button onClick={ () => this.cancel() }>Cancel</button>}
      </div>
    )
  }
}

export default connect(state => ({
  view: state.view,
}))(RecipeButtons);
