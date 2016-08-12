import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipesList from './RecipesList';
import ActiveRecipe from './ActiveRecipe';
import RecipeButtons from './RecipeButtons';
import NewRecipe from './NewRecipe';

import {
  getRecipes,
  setActiveRecipe,
  getIngredients,
} from '../../actions';

class Recipes extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());
    this.props.dispatch(getIngredients())
  }

  render() {
    const { recipes, view, activeRecipe } = this.props;
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
                { Object.keys(activeRecipe).length > 0 && <ActiveRecipe /> }
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
  activeRecipe: state.activeRecipe,
}))(Recipes);
