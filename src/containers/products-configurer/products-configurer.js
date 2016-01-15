import React from 'react';
import data from '../../mock-data';
import ProductsUtil from '../../util/products-util';
import ColumnList from '../../components/column-list/column-list';

export default class ProductsConfigurer extends React.Component {
  render() {
    return(
      <div>
        <ColumnList products={ProductsUtil.getProducts(data)} />
      </div>
    )
  }
}
