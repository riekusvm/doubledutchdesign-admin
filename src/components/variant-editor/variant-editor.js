import React from 'react';
import ProductsUtil from '../../util/products-util';
import appCss from '../../app.css';
import ButtonGroup from '../button-group/button-group';
import Button from '../button/button';

export default class VariantEditor extends React.Component {
  static propTypes = {
    params: React.PropTypes.object
  }
  render() {
    const params = this.props.params;
    const variant = ProductsUtil.getVariant(params.productId, params.partId, params.variantId);
    const options = ProductsUtil.getOptions(params.productId, params.partId, params.variantId);
    console.log('OPTIONS: ', options);

    return (
      <div className={appCss.column}>
        <ButtonGroup>
          <Button label="save" />
          <Button label="discard" />
        </ButtonGroup>
        <h2>{variant.description}</h2>
      </div>
    );
  }
}
