import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupTwo } from './popup-two';
import { startGuideThree } from '../guide-three/function';

export function startGuideTwo() {
  // Get Collapse button element
  const collapseButton = document.querySelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-oofez5');
  if (!collapseButton) {
    throw new Error('Failed to find Collapse button element');
  }

  const rect = collapseButton.getBoundingClientRect();
  const position = {
    middle: rect.top + rect.height / 2,
    right: rect.right,
    top: rect.top,
    left: rect.left
  };

  const appContainer = document.createElement('div');
  collapseButton.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<PopupTwo position={position}/>);

  collapseButton.addEventListener('click', () => {
    widget.unmount();
    startGuideThree();
  });
}