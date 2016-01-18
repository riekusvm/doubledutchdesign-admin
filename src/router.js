import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ProductsConfigurer from './containers/products-configurer/products-configurer';
import PartsList from './components/parts-list/parts-list';
import VariantsList from './components/variants-list/variants-list';
import VariantEditor from './components/variant-editor/variant-editor';
import NotFound from './components/notfound/notfound';

export default class AppRouter extends React.Component {
  render = () => {
    return (
      <Router>
        <Route path="/" component={ProductsConfigurer}>
          <Route path="products/:productId" component={PartsList}>
            <Route path=":partId" component={VariantsList}>
              <Route path="variants/:variantId" component={VariantEditor} />
            </Route>
          </Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
