import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContainer from 'Store';
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
