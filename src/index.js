import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import { Resume } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <Resume/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();