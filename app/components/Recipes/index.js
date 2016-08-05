import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipesList from './RecipesList';
import ActiveRecipe from './ActiveRecipe';
import RecipeButtons from './RecipeButtons';
import NewRecipe from './NewRecipe';

import { getRecipes, setActiveRecipe } from '../../actions';

class Recipes extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());
  }

  render() {
    const { recipes, view } = this.props;
    return (
      <div className="recipes">
        <div className="recipes__header">
          <h1>Recipes</h1>
        </div>
        <RecipesList recipes={recipes} />
          <div className="recipes__actionArea">

            { view != 'addRecipe' && (
              <div>
                <RecipeButtons />
                <ActiveRecipe />
              </div>
            )}

            { view == 'addRecipe' && <NewRecipe /> }
          </div>
      </div>
    )
  }
}

export default connect(state => ({
  recipes: state.recipes,
  view: state.view,
}))(Recipes);
