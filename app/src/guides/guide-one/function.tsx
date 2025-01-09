import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupOne } from './popup-one';
import { startGuideTwo } from '../guide-two/function';

export function startGuideOne() {
  // Get Iris Classifier element
  const titanicSelectElements = document.querySelectorAll(".css-5gmxj4");
  const targetElement = Array.from(titanicSelectElements).find(el => 
    el.textContent?.includes('Titanic Survival Predictor')
  );
  if (!targetElement) {
    throw new Error('Failed to find Titanic Survial Predictor element');
  }

  const rect = targetElement.getBoundingClientRect();
  const position = {
    top: rect.top,
    left: rect.left
  };

  const appContainer = document.createElement('div');
  targetElement.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<PopupOne position={position}/>);

  targetElement.addEventListener('dblclick', () => {
    widget.unmount();
    startGuideTwo();
  });
}