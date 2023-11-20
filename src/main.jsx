import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


console.log('Before rendering');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

console.log('After rendering');
