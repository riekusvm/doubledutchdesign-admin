import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import AppRouter from './router';

ReactDom.render((
  <App router={AppRouter}/>
), document.getElementById('content'));
