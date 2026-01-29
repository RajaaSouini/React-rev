import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './revision8Api/axiosExemple2';
import reportWebVitals from './reportWebVitals';
import Status from './revision5/Status';
import Form1 from './revision6Formulaire/Form1';
import ExempleAxios from './revision8Api/axiosExemple1';
const isOnline = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
