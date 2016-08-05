import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from '../../Util/Icon';
import EditIngredient from './EditIngredient';
import StaticIngredient from './StaticIngredient';
import IngredientActions from './IngredientActions';

import {
  editIngredient,
  deleteIngredient,
} from '../../../actions';

class Ingredient extends Component {

  constructor() {
    super();
    this.state = {
      showActions: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      showActions: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      showActions: false,
    })
  }

  editIngredient = () => {
    console.log('edit');
    this.setState({
      editView: true,
    });
  }

  deleteIngredient = () => {
    this.props.dispatch(deleteIngredient({
      '_id': this.props.id,
    }))
    console.log('delete');
  }

  cancelIngredient = () => {
    this.setState({
      editView: false,
    });
  }

  saveIngredient = () => {
    console.log('save!');
    this.props.dispatch(editIngredient({
      '_id': this.props.id,
      'name': this.refs.editIngredient.refs.newIngredient__name.value,
      'type': 'grain',
      'cost': this.refs.editIngredient.refs.newIngredient__cost.value,
      'unit': this.refs.editIngredient.refs.newIngredient__unit.value,
    }));
    this.setState({
      editView: false,
    });
  }

  render() {
    const { name, cost, unit, type } = this.props;
    return (
      <div className="ingredient__listItem"
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave } >

        { this.state.editView && <EditIngredient
                                    name={ name }
                                    cost={ cost }
                                    unit={ unit }
                                    type={ type }
                                    ref="editIngredient"
                                     /> }
        { !this.state.editView && <StaticIngredient
                                    name={ name }
                                    cost={ cost }
                                    unit={ unit }
                                    type={ type } /> }
        { this.state.showActions && <IngredientActions
                                    editView={ this.state.editView }
                                    onEdit={ this.editIngredient }
                                    onDelete={ this.deleteIngredient }
                                    onCancel={ this.cancelIngredient }
                                    onSave={ this.saveIngredient } /> }

      </div>
    )
  }
}

export default connect()(Ingredient);
