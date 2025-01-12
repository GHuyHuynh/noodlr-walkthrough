import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupOne } from './popup-one';
import { startGuideTwo } from '../guide-two/function';

export function startGuideOne() {
  // Get Iris Classifier element
  const titanicSelectElements = document.querySelectorAll(".css-5gmxj4");
  const selectorElement = Array.from(titanicSelectElements).find(el => 
    el.textContent?.includes('Titanic Survival Predictor')
  );
  if (!selectorElement) {
    throw new Error('Failed to find Titanic Survial Predictor element');
  }

  const rect = selectorElement.getBoundingClientRect();
  const selectorPosition = {
    top: rect.top,
    left: rect.left
  };

  const canvasTopbar = document.querySelector('.css-atal80');
  if (!canvasTopbar) {
    throw new Error('Canvas topbar not found');
  }

  const appContainer = document.createElement('div');
  canvasTopbar.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<PopupOne position={selectorPosition}/>);

  selectorElement.addEventListener('dblclick', () => {
    widget.unmount();
    startGuideTwo();
  });
}