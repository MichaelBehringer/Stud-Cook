import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import App from './App';

import './styles/globalStyles.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);