import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import root from './Redux/Reducers';
import {Provider} from 'react-redux'
import { createStore } from 'redux';

const store=createStore(root);
// console.log('store',store.getState());
// store.subscribe(()=>console.log('subscribe store',store.getState()));
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

