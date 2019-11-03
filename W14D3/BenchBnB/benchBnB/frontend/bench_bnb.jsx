import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = 

  ReactDOM.render(<h1>Hello, World!</h1>, root);
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});