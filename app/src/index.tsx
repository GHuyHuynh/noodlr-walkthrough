import React from 'react';
import { createRoot } from 'react-dom/client';
import { ContentScript } from './components/contentScript';

function init() {
  const appContainer = document.createElement('div');
  if (!appContainer) {
    throw new Error('Failed to create app container');
  }

  document.body.appendChild(appContainer);
  const root = createRoot(appContainer);
  root.render(<ContentScript />);
}

init();