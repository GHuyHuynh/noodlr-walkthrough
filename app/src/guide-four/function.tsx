import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupFour } from './popup-four';

export function startGuideFour() {
  const buttons = document.querySelectorAll(
    'button.MuiButtonBase-root.MuiButton-text.MuiButton-textPrimary'
  );
  
  const okButton = Array.from(buttons).find(
    button => button.textContent === 'OK'
  ) as HTMLButtonElement;
  
  if (!okButton) {
    new Error('Could not find OK button');
  }

  const rect = okButton.getBoundingClientRect();
  const position = {
    top: rect.top,
    left: rect.left,
    width: rect.width
  };

  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer); // Changed: Append to body instead
  const widget = createRoot(appContainer);
  widget.render(<PopupFour position={position} />);
}
