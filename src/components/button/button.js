import React from 'react';
import css from './button.css';

export default class Button extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    classes: React.PropTypes.array
  }

  render() {
    return (
      <span onClick={this.props.onClick} className={css.button + ' ' + this.getClasses()}>
        {this.props.label}</span>
    );
  }

  getClasses() {
    if (this.props.classes) {
      return this.props.classes.join(' ');
    }
    return '';
  }
}
