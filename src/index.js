import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import { Provider } from 'react-redux';
import { App } from './App';
import {cofigureStore, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react';

const store = cofigureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
{/* <PersistGate loading={null} persistor={persistor}>
</PersistGate> */}