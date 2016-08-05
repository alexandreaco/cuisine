import React from 'react';
//---
// Icons

export const getIcon = (name) => {

  let icon = '';

  switch(name) {
    case 'edit':
      icon = (
        <span>E</span>
      );
      break;

    case 'delete':
      icon = (
        <span>D</span>
      );
      break;

    case 'cancel':
      icon = (
        <span>C</span>
      );
      break;

    case 'save':
      icon = (
        <span>S</span>
      );
      break;

    default:
      break;
  }

  return icon;
}
