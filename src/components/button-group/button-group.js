import React from 'react';
import css from './button-group.css';

export default class ButtonList extends React.Component {
  static propTypes = {
    children: React.PropTypes.array
  }
  render() {
    return (
      <div className={css.buttonGroup}>
        {this.props.children || ''}
      </div>
    );
  }
}
