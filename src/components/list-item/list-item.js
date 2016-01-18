import React from 'react';
import {Link} from 'react-router';
import css from './list-item.css';

export default class ListItem extends React.Component {
  static propTypes = {
      name: React.PropTypes.string
  }

  render() {
    return (
      <div className={css.listItem}>
        {this.props.name}
      </div>
    )
  }
}
