import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component/game';

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  // debugger;
  ReactDOM.render(<Game/>, main);
})