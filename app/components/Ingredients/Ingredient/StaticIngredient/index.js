import React, { Component } from 'react';

import Icon from '../../../Util/Icon';

class StaticIngredient extends Component {

  constructor() {
    super();
    this.state = {
      showActions: false,
    }
  }

  render() {
    const type = `ingredient__type--${ this.props.type }`;
    return (
      <div className="ingredient">
        <div className={ type }></div>
        <div className="ingredient__name">{ this.props.name }</div>
        <div className="ingredient__info">
          <span className="ingredient__cost">${ this.props.cost }</span>
          <span className="ingredient__unit"> / { this.props.unit }</span>
        </div>
      </div>
    )
  }
}

export default StaticIngredient;
