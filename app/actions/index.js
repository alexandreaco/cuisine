import { createAction } from 'redux-actions';

import {
  apiGetIngredients,
  apiAddIngredient,
  apiEditIngredient,
  apiDeleteIngredient,
  apiGetRecipes,
  apiAddRecipe,
} from '../utils/cuisineApi';

import {
  GET_INGREDIENTS,
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  DELETE_INGREDIENT,
  GET_RECIPES,
  SET_ACTIVE_RECIPE,
  ADD_RECIPE,
  SET_SECTION,
  SET_VIEW,
} from '../constants';

export const getIngredients = createAction(GET_INGREDIENTS, apiGetIngredients);

export const addIngredient = createAction(ADD_INGREDIENT, apiAddIngredient);

export const setSection = createAction(SET_SECTION);

export const setView = createAction(SET_VIEW);

export const editIngredient = createAction(EDIT_INGREDIENT, apiEditIngredient);

export const setActiveRecipe = createAction(SET_ACTIVE_RECIPE);

export const deleteIngredient = createAction(DELETE_INGREDIENT, apiDeleteIngredient);

export const getRecipes = createAction(GET_RECIPES, apiGetRecipes);

export const addRecipe = createAction(ADD_RECIPE, apiAddRecipe);
