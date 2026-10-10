import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ModeProvider } from './context/ModeContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>,
);
