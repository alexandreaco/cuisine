import React, { Component } from 'react';

import Icon from '../../../Util/Icon';

class IngredientActions extends Component {

  constructor() {
    super();
    this.state = {
      showActions: false,
    }
  }

  render() {
    const { onEdit, onDelete, onCancel, onSave } = this.props;
    return (
      <div className="ingredient__actions">
        { !this.props.editView && <Icon name="edit" onClick={ onEdit } /> }
        { !this.props.editView && <Icon name="delete" onClick={ onDelete }/> }
        { this.props.editView && <Icon name="save" onClick={ onSave } /> }
        { this.props.editView && <Icon name="cancel" onClick={ onCancel } /> }
      </div>
    )
  }
}

export default IngredientActions;
