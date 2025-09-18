import './index.scss';
import { BrowserRouter as Router } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Interruptor de mantenimiento: usa variable de entorno para activar.
// Configura VITE_MAINTENANCE=true para deshabilitar el sitio rápidamente.
const IS_MAINTENANCE = import.meta.env.VITE_MAINTENANCE === 'true';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

if (IS_MAINTENANCE) {
  root.render(
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      Sitio en mantenimiento
    </div>
  );
} else {
  root.render(
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  );
}
