import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSection } from '../../../../actions';

class NavItem extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  handleClick(section) {
    this.props.dispatch(setSection(section));
  }

  render() {
    const { name, section } = this.props;

    return (
      <div className="navigation__item" onClick={ () => this.handleClick(section) }>
        { name }
      </div>
    )
  }
}

export default connect()(NavItem);
