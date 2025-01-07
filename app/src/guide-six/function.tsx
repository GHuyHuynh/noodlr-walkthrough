import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupSix } from './popup-six';

function handleStatusBox() {
  const buildAppButton = document.querySelector('button[aria-label="icon-copy"]');

  if (!buildAppButton) {
    throw new Error('Could not find export button');
  }

  const rect = buildAppButton.getBoundingClientRect();
  const position = {
    top: rect.top,
    left: rect.left
  };

  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<PopupSix position={position}/>);

  buildAppButton.addEventListener('click', () => {
    widget.unmount();
    console.log('build button clicked');
  });
}

function observeStatusBox(callbackFunction: () => void): MutationObserver {
  const observer = new MutationObserver((mutations) => {
    const statusBox = document.querySelector(
      '.MuiDataGrid-cell[data-field="status"] .icon.complete'
    );

    if (statusBox) {
      observer.disconnect();
      callbackFunction();
    }
  });

  return observer;
}

export function startGuideSix() {
  const observerConfig = {
    childList: true,
    subtree: true
  };

  const observer = observeStatusBox(handleStatusBox);

  // Start observing the document body
  observer.observe(document.body, observerConfig);
  
}