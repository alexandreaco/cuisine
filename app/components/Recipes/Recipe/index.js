import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipe extends Component {

  constructor() {
    super();
  }

  render() {
    const { name, content } = this.props;
    return (
      <div className="recipe__listItem">
        <div className="recipe__name">{ this.props.name }</div>
        <div className="recipe__content">{ this.props.content }</div>
      </div>
    )
  }
}

export default connect()(Recipe);
