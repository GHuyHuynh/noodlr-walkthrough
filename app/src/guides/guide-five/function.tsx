import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupFive } from './popup-five';
import { startGuideSix } from '../guide-six/function';

export function startGuideFive() {
  // Bottom console expand button
  const consoleExpand = document.querySelector(
    '.button-container .icon.expand.material-symbols-outlined.filled'
  );
  if (!consoleExpand) {
    throw new Error('Could not find console expand button');
  }

  const rect = consoleExpand.getBoundingClientRect();
  const position = {
    top: rect.top,
    left: rect.left
  };

  const appContainer = document.createElement('div');
    consoleExpand.appendChild(appContainer);
    const widget = createRoot(appContainer);
    widget.render(<PopupFive position={position}/>);

  consoleExpand.addEventListener('click', () => {
    widget.unmount();
    startGuideSix();
  });

}