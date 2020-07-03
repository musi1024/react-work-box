import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'styled-components/macro';
import StoreContainer from 'store';
import theme from 'styles/theme';
import checkWeChatNav from './rpf/un/checkWeChatNav';
import api from 'api';
import App from './App';
checkWeChatNav();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreContainer.Provider>
        <Router>
          <SWRConfig
            value={{
              fetcher: (key, params) => api[key](params)
            }}
          >
            <App />
          </SWRConfig>
        </Router>
      </StoreContainer.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
