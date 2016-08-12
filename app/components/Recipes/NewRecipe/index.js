import React, { Component } from 'react';
import { connect } from 'react-redux';
var marked = require('marked');
import Select from 'react-select';

import {
  setView,
  addRecipe,
  updateRecipe,
} from '../../../actions';

class NewRecipe extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
      availableIngredients: [],
      addingIngredient: {},
      recipeIngredients: [],
    }
  }

  componentWillMount() {
    // turn ingredients array into something the dropdown can parse
    const { ingredients } = this.props;
    const availableIngredients = ingredients.map((ingredient) => {
      return {
        value: ingredient._id,
        label: ingredient.name
      }
    });
    this.setState({
      availableIngredients: availableIngredients,
    })
  }

  saveRecipe() {
    this.props.dispatch(addRecipe({
      name: this.refs.newRecipe__name.value,
      content: this.refs.newRecipe__content.value,
      ingredients: [],
    }));
  }

  cancel() {
    this.props.dispatch(setView('default'));
  }

  handleEdit = ({target}) => {
    const val = target.value;
    this.setState({
      text: val
    });
  }

  logChange = (val) => {
    this.setState({
      addingIngredient: val
    })
    console.log("Selected: " + val.label);
  }

  addIngredient = () => {
    console.log(this.refs.ingredient__amount.value);
    console.log(this.refs.ingredient__unit.value);
    console.log(this.refs.ingredient__obj.refs.value0.value); // get hidden input

    const newRecipeIngredientsList = this.state.recipeIngredients;
    newRecipeIngredientsList.push({
      ingredient: this.state.addingIngredient,
      amount: this.refs.ingredient__amount.value,
      unit: this.refs.ingredient__unit.value,
    });

    this.setState({
      recipeIngredients: newRecipeIngredientsList
    });
  }

  render() {
    console.info(this.state.recipeIngredients);
    const type = `recipe__type--${ this.props.type }`;
    var options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
    ];
    return (
      <div className="recipe__new">
        <div className="recipe">
          <span className="input-wrapper">
            <input type="text"
              className="recipe__name"
              ref="newRecipe__name"
              placeholder="name" />
            </span>

          <div className="recipe__content">
            <span className="input-wrapper">
              <textarea
                className="recipe__editor"
                ref="newRecipe__content"
                placeholder="Enter instructions here..."
                onInput={ this.handleEdit }
              />

              <div className="recipe__preview"
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.text) }}>
              </div>
            </span>
          </div>

          <div className="recipe__ingredients">

          { this.state.recipeIngredients.map((ingredient) => {
            return (
              <div className="recipe__ingredient-preview" key={ingredient.ingredient.value}>
                <div className="recipe__ingredient-preview__label">{ingredient.ingredient.label}</div>
                <div className="recipe__ingredient-preview__amount">{ingredient.amount}</div>
                <div className="recipe__ingredient-preview__unit">{ingredient.unit}</div>
              </div>
            )
          })}





            <Select
              name="ingredient"
              value={this.state.addingIngredient.value}
              options={this.state.availableIngredients}
              onChange={this.logChange}
              ref="ingredient__obj"
            />
            <span className="input-wrapper">
              <input type="number"
                className="ingredient__amount"
                ref="ingredient__amount"
                placeholder="amount" />
            </span>
            <select className="ingredient__unit"
              ref="ingredient__unit">
              <option value="oz">oz</option>
              <option value="lb">lb</option>
              <option value="gal">gal</option>
              <option value="qt">qt</option>
              <option value="liter">liter</option>
              <option value="piece">piece</option>
            </select>
            <button onClick={() => this.addIngredient()}>Add Ingredient</button>
          </div>
        </div>

        <div className="recipe__new__buttons">
          <button onClick={ () => this.saveRecipe() }>Save</button>
          <button onClick={ () => this.cancel() }>Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
}))(NewRecipe);
