import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import FAQContainer from './containers/FAQContainer';
import App from './containers/App';

ReactDOM.render(
  // <FAQContainer />,
  // document.getElementById('app')
  <App />,
  document.getElementById('app')
);
