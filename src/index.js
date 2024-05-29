import React from 'react';
import ReactDOM from 'react-dom/client'; // Zmiana na 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Użycie createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Jeśli nie używasz reportWebVitals, usuń lub skomentuj poniższy import
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
