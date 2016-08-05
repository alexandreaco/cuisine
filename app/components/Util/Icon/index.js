import React, { Component } from 'react';

import { getIcon } from '../../../utils/icons';


class Icon extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="icon" onClick={ this.props.onClick }>
        { getIcon(this.props.name) }
      </div>
    )
  }
}

export default Icon;
