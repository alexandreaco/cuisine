import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavItem from './NavItem';

class Navigation extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    //this.props.dispatch(getIngredients());
  }

  render() {
    return (
      <div className="navigation">
        <NavItem name="Today" section="mealPlan" />
        <NavItem name="Recipes" section="recipes" />
        <NavItem name="Ingredients" section="ingredients" />
      </div>
    )
  }
}

export default connect(state => ({
  section: state.section,
}))(Navigation);
