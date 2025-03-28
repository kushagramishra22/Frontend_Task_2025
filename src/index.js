// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { sampleQueries } from './data/sampleData';

// // Store data in a global variable before React loads
window.preloadedData = { sampleQueries };

// Start measuring performance right when the script executes
const startTime = performance.now();

// Function to measure and report load time
const measureLoadTime = () => {
  const loadTime = performance.now() - startTime;
  console.log(`Application loaded in ${loadTime} milliseconds`);
  
  // Store the load time in a global variable so App component can access it
  window.appLoadTime = loadTime;
};

// Measure when DOM content is loaded
document.addEventListener('DOMContentLoaded', measureLoadTime);

// Also measure when window fully loads
window.addEventListener('load', measureLoadTime);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);