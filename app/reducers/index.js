import { handleActions } from 'redux-actions';
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

const initialState = {
  ingredients: [],
  recipes: [],
  section: 'mealPlan',
  view: 'default',
  ingredientCategories: [
    'produce',
    'meat',
    'nuts',
    'grain',
  ],
  activeRecipe: {},
};

export default handleActions({

  [GET_INGREDIENTS]: (state, action) => ({
    ...state,
    ingredients: action.payload,
  }),

  [ADD_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: action.payload,
  }),

  [EDIT_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: action.payload,
  }),

  [DELETE_INGREDIENT]: (state, action) => ({
    ...state,
    ingredients: action.payload,
  }),

  [GET_RECIPES]: (state, action) => ({
    ...state,
    recipes: action.payload,
  }),

  [SET_ACTIVE_RECIPE]: (state, action) => ({
    ...state,
    activeRecipe: action.payload,
  }),

  [ADD_RECIPE]: (state, action) => ({
    ...state,
    recipes: action.payload,
  }),

  [SET_SECTION]: (state, action) => ({
    ...state,
    section: action.payload,
  }),

  [SET_VIEW]: (state, action) => ({
    ...state,
    view: action.payload,
  }),

}, initialState);
