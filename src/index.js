import 'proxy-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'rpf/react/vconsole';
import 'styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import theme from 'styles/theme';
import Store from 'store';
import history from './history';
import App from 'App';
import checkWeChatNav from 'rpf/un/checkWeChatNav';
import preventScroll from 'rpf/un/preventScroll';

checkWeChatNav();
preventScroll();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Store.Provider>
      <Router history={history}>
        <App />
      </Router>
    </Store.Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
