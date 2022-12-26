import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Provider } from 'react-redux';
import { App } from './App';

import { cofigureStore } from './store';
const store = cofigureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);