import { handleActions } from 'redux-actions';
import {
  GET_INGREDIENTS,
  ADD_INGREDIENT,
  EDIT_INGREDIENT,
  DELETE_INGREDIENT,
  SET_SECTION,
  SET_VIEW,
} from '../constants';

const initialState = {
  ingredients: [],
  section: 'mealPlan',
  view: 'default',
  ingredientCategories: [
    'produce',
    'meat',
    'nuts',
    'grain',
  ]
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

  [SET_SECTION]: (state, action) => ({
    ...state,
    section: action.payload,
  }),

  [SET_VIEW]: (state, action) => ({
    ...state,
    view: action.payload,
  }),

}, initialState);
