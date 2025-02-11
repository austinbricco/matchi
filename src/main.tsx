import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const element = document.getElementById('root');
if (!element) throw new Error('Failed to find root element');

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
);
