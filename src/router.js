import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import ProductsConfigurer from './containers/products-configurer/products-configurer';
import NotFound from './components/notfound/notfound';

export default class AppRouter extends React.Component {
  render = () => {
    return (
      <Router>
        <Route path="/">
          <IndexRoute component={ProductsConfigurer} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
