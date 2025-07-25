import './index.scss';
import { BrowserRouter as Router } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
