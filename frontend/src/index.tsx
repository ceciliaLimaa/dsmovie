import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //import do bootstrap
import './index.css'; //import do css 
import App from './App';
 
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render acessa a root que esta no index.html
// <React.StrictMode>  deixa o projeto controlado
// <App /> executa toda a parte do app.tsx