import React from 'react';
import ProductsUtil from '../../util/products-util';
import appCss from '../../app.css';

export default class VariantEditor extends React.Component {
  static propTypes = {
    params: React.PropTypes.object
  }
  render() {
    const variant = ProductsUtil.getVariant(this.props.params.productId, this.props.params.partId,
    this.props.params.variantId)
    return(
      <div className={appCss.column}>
        <h2>{variant.description}</h2>
      </div>
    )
  }
}
