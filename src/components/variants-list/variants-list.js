import React from 'react';
import ColumnList from '../column-list/column-list';
import ProductsUtil from '../../util/products-util';
import appCss from '../../app.css';

export default class VariantsList extends React.Component {
  static propTypes = {
    params: React.PropTypes.object
  }

  render() {
    return (
      <div className={appCss.column}>
        <ColumnList header="Variants"
          linkBase={'products/' + this.props.params.productId + '/' + this.props.params.partId + '/variants'}
          items={ProductsUtil.getVariants(this.props.params.productId, this.props.params.partId)}/>
        {this.props.children || ''}
      </div>
      )
  }
}
