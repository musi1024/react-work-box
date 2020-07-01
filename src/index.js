import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import StoreContainer from 'store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoreContainer.Provider>
      <Router>
        <App />
      </Router>
    </StoreContainer.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
