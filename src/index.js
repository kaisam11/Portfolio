import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/styles.scss'
import {GlobalProvider} from './globalContext/globalContext'


ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

