import React from 'react';
import ListItem from '../list-item/list-item';

export default class ColumnList extends React.Component {

  static propTypes = {
    products: React.PropTypes.array
  }

  render() {
    const items = this.props.products.map((product) => {
      return <ListItem name={product.type} />;
    })

    return(
      <div>{items}</div>
    )
  }
}
