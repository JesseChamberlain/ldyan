import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ToolBar from './components/ToolBar'

$(function() {
  ReactDOM.render(
    <ToolBar />,
    document.getElementById('tool-bar')
  );
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
