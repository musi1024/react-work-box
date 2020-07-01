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
    <StoreContainer.Provider>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </StoreContainer.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
