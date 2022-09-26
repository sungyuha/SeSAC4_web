import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sample from './Sample';
import Sample2 from './Sample2';
import Sample3 from './Sample3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sample />
    <Sample2 />
    <Sample3 />
  </React.StrictMode>
);
