import React from 'react';
import ColumnList from '../column-list/column-list';
import ProductsUtil from '../../util/products-util';

export default class VariantsList extends React.Component {
  static propTypes = {
    params: React.PropTypes.object
  }

  render() {
    return (
        <ColumnList header="Variants"
          linkBase={'products/' + this.props.params.productId + '/parts/' + this.props.params.partId + '/variants'}
          items={ProductsUtil.getVariants(this.props.params.productId, this.props.params.partId)}/>
      )
  }
}
