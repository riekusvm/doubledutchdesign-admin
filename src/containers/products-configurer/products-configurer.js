import React from 'react';
import ProductsUtil from '../../util/products-util';
import ColumnList from '../../components/column-list/column-list';
import appCss from '../../app.css';

export default class ProductsConfigurer extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return(
      <div className={appCss.column}>
        <ColumnList header="Products" items={ProductsUtil.getProducts()}
          linkBase="products" />
        {this.props.children || ''}
      </div>
    )
  }
}
