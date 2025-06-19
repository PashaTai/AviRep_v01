import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import './index.css';

// Get current path
const currentPath = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Router path={currentPath} />
      </main>
      <BackToTop />
    </div>
  </StrictMode>
);