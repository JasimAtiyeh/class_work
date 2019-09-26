import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import ReactDOM from 'react-dom';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('content');

  ReactDOM.render(<Root store={ store } />, rootElement);
})

window.store = store;