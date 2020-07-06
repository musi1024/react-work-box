import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { SWRConfig } from 'swr';
import theme from 'styles/theme';
import StoreContainer from 'store';
import api from 'api';
import checkWeChatNav from 'rpf/un/checkWeChatNav';
import preventScroll from 'rpf/un/preventScroll';
import 'rpf/react/vconsole';
import App from 'App';

checkWeChatNav();
preventScroll();

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
