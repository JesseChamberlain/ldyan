import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

$(function() {

  let appDiv = document.getElementById('app')
  let userId = appDiv.dataset.user_id

  ReactDOM.render(
    <App userId={userId}/>,
    appDiv
  );
});
