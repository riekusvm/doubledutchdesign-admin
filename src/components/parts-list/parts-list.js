import React from 'react';
import ColumnList from '../column-list/column-list';
import ProductsUtil from '../../util/products-util';

export default class PartsList extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    children: React.PropTypes.element
  }

  render() {
    return (
      <div>
        <ColumnList header="Parts" linkBase={'products/' + this.props.params.productId}
          items={ProductsUtil.getParts(this.props.params.productId)} />
        {this.props.children || ''}
      </div>
      )
  }
}
