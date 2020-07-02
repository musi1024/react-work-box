import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import StoreContainer from 'store';
import { ThemeProvider } from 'styled-components/macro';
import theme from 'styles/theme';
import App from './App';
import checkWeChatNav from './rpf/un/checkWeChatNav';
checkWeChatNav();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreContainer.Provider>
        <Router>
          <App />
        </Router>
      </StoreContainer.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
