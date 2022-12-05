import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthCOntextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthCOntextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthCOntextProvider>
);


