import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthCOntextProvider } from './context/AuthContext';
import { ChatCOntextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthCOntextProvider>
    <ChatCOntextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChatCOntextProvider>
  </AuthCOntextProvider>
);


