import React from 'react';

export default class ListItem extends React.Component {
  static propTypes = {
      name: React.PropTypes.string
  }

  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
