import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupSix } from './popup-six';
import { startCompletePopup } from '../guide-seven/function';

/**
 * Handle the popup for guide six
 * Seperate function since it will be call by the observer
 * Consider this the main function of guide six
 */
function handlePopup() {
  // The button contain the span as it children component
  // Click only register on the span element
  const buildAppButton = document.querySelector('button[aria-label="icon-copy"]');
  if (!buildAppButton) {
    throw new Error('Could not find export button');
  }

  const deployedCodeSpan = document.querySelector('button[aria-label="icon-copy"] .material-symbols-outlined');
  if (!deployedCodeSpan) {
    throw new Error('Could not find deployed code span');
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

  deployedCodeSpan.addEventListener('click', () => {
    widget.unmount();
    // wait for download Modal to appear
    setTimeout(() => {
      startCompletePopup();
    }, 500);
  });
}

/**
 * Observer the status box to become a checkmark to trigger the popup
 * @param callbackFunction -> call function when the status box is a checkmark
 * @returns void
 */
function observeStatusBox(callbackFunction: () => void): MutationObserver {
  const observer = new MutationObserver(() => {
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

  const observer = observeStatusBox(handlePopup);
  // Start observing the document body
  observer.observe(document.body, observerConfig);
  
}