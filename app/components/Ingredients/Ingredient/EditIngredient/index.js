import React, { Component } from 'react';

import Icon from '../../../Util/Icon';

class EditIngredient extends Component {

  constructor() {
    super();
    this.state = {
      showActions: false,
    }
  }

  componentDidMount() {
    // populate values with props
    this.refs.newIngredient__name.value = this.props.name;
    this.refs.newIngredient__cost.value = this.props.cost;
    this.refs.newIngredient__unit.value = this.props.unit;
  }

  render() {
    const type = `ingredient__type--${ this.props.type }`;
    return (
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
    )
  }
}

export default EditIngredient;
