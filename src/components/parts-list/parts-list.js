import React from 'react';
import ColumnList from '../column-list/column-list';
import ProductsUtil from '../../util/products-util';

export default class PartsList extends React.Component {
  static propTypes = {
    params: React.PropTypes.func,
    children: React.PropTypes.array
  }

  render() {
    console.log('product id: ', this.props.params.productId);
    return (
      <div>
        <ColumnList header="Parts" linkBase={'products/' + this.props.params.productId}
          items={ProductsUtil.getParts(this.props.params.productId)} />
        {this.props.children || ''}
      </div>
      )
  }
}
