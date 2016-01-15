import React from 'react';
import {Link} from 'react-router';

export default class ListItem extends React.Component {
  static propTypes = {
      name: React.PropTypes.string
  }

  render() {
    return (
      <div>
        {this.props.name}
        <span>
          <Link to="###">-</Link>
        </span>
      </div>
    )
  }
}
