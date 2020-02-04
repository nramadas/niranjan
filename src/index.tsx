import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
