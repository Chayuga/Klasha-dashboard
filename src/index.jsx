import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { SearchProvider } from './contexts/SearchProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <SearchProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </SearchProvider>
  </ContextProvider>
);
