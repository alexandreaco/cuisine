import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setView,
  addIngredient,
} from '../../../actions';

class NewIngredient extends Component {

  constructor() {
    super();
  }

  saveIngredient() {
    this.props.dispatch(addIngredient({
      name: this.refs.newIngredient__name.value,
      cost: this.refs.newIngredient__cost.value,
      unit: this.refs.newIngredient__unit.value,
    }));
  }

  cancel() {
    this.props.dispatch(setView('default'));
  }

  render() {
    const type = `ingredient__type--${ this.props.type }`;
    return (
      <div className="ingredient__new">
        <div className="ingredient">
          <div className={type}></div>
          <span className="input-wrapper">
            <input type="text"
              className="ingredient__name"
              ref="newIngredient__name"
              placeholder="name" />
            </span>

          <div className="ingredient__info">

            <span className="ingredient__label">$</span>
            <span className="input-wrapper">
              <input type="number"
                className="ingredient__cost"
                ref="newIngredient__cost"
                placeholder="cost" />
              </span>

            <span className="ingredient__label">/</span>
            <select className="ingredient__unit"
              ref="newIngredient__unit">
              <option value="oz">oz</option>
              <option value="lb">lb</option>
              <option value="gal">gal</option>
              <option value="qt">qt</option>
              <option value="liter">liter</option>
              <option value="piece">piece</option>
            </select>

          </div>
        </div>

        <div className="ingredient__new__buttons">
          <button onClick={ () => this.saveIngredient() }>Save</button>
          <button onClick={ () => this.cancel() }>Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect()(NewIngredient);
