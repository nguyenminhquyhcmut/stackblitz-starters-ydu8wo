import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Component from './Component';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Component />
  </StrictMode>
);
