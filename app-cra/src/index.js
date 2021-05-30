import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/style/index.scss';
import App from './App';
import Apage from './components/page/Apage';
import Atype from './components/Section/Atype/Atype';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  {/*
    <App />
     */}
  <Apage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
