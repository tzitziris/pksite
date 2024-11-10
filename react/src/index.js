import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser'; // Import the worker

// Start the mock service worker in development mode
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
