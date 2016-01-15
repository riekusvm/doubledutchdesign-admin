import React from 'react';
import ProductsUtil from '../../util/products-util';
import ColumnList from '../../components/column-list/column-list';

export default class ProductsConfigurer extends React.Component {
  static propTypes = {
    children: React.PropTypes.array
  }

  render() {
    return(
      <div>
        <ColumnList header="Products" items={ProductsUtil.getProducts()}
          linkBase="products" />
        {this.props.children || ''}
      </div>
    )
  }
}
