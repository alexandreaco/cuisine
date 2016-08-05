import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipesList from './RecipesList';
import ActiveRecipe from './ActiveRecipe';

import { getRecipes } from '../../actions';

class Recipes extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="recipes">
        <div className="recipes__header">
          <h1>Recipes</h1>
        </div>
        <RecipesList recipes={recipes}/>
        { recipes[0] && <ActiveRecipe recipe={recipes[0]}/> }
      </div>
    )
  }
}

export default connect(state => ({
  recipes: state.recipes,
}))(Recipes);
