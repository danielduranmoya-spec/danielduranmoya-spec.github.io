import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Latin subsets only: the site is in Spanish. Fraunces comes as one variable file with the optical-size axis.
import '@fontsource/kanit/latin-300.css';
import '@fontsource/kanit/latin-400.css';
import '@fontsource/kanit/latin-500.css';
import '@fontsource/kanit/latin-600.css';
import '@fontsource/kanit/latin-900.css';
import '@fontsource/manrope/latin-300.css';
import '@fontsource/manrope/latin-400.css';
import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource/marck-script/latin-400.css';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build prerenders the page into #root (scripts/prerender.mjs); hydrate it when present.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
