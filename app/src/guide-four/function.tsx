import React from 'react';
import { createRoot } from 'react-dom/client';

export function startGuideFour(): Promise<HTMLButtonElement> {
  return new Promise((resolve, reject) => {
    // Wait for the popup to appear with 500ms timeout
    setTimeout(() => {
      // Query all MUI buttons then filter by text "OK"
      const buttons = document.querySelectorAll(
        'button.MuiButtonBase-root.MuiButton-text.MuiButton-textPrimary'
      );
      
      const okButton = Array.from(buttons).find(
        button => button.textContent === 'OK'
      ) as HTMLButtonElement;
      
      if (!okButton) {
        reject(new Error('Could not find OK button'));
        return;
      }

      
    }, 500);
  });
}