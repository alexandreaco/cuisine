import React, { Component } from 'react';
import { connect } from 'react-redux';
var marked = require('marked');

import {
  setView,
  addRecipe,
} from '../../../actions';

class NewRecipe extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
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

  render() {
    const type = `recipe__type--${ this.props.type }`;
    return (
      <div className="recipe__new">
        <div className="recipe">
          <div className={type}></div>
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
        </div>

        <div className="recipe__new__buttons">
          <button onClick={ () => this.saveRecipe() }>Save</button>
          <button onClick={ () => this.cancel() }>Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect()(NewRecipe);
