import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupThree } from './popup-three';
import { smoothScroll } from '../animations/animations';

export function startGuideThree() {
  const canvasViewport = document.querySelector('.canvas-target-ref');
  if (!canvasViewport) {
    throw new Error('Failed to find canvas viewport');
  }

  const trainingNode = Array.from(document.querySelectorAll('.css-106ak42')).find(el => 
    el.querySelector('.layer-header .title')?.textContent?.includes('Training')
  );
  if (!trainingNode) {
    throw new Error('Failed to find Training Node element');
  }

  // Get positions
  const viewportRect = canvasViewport.getBoundingClientRect();
  const nodeRect = trainingNode.getBoundingClientRect();
  const scrollValue = nodeRect.left - viewportRect.left + canvasViewport.scrollLeft;

  // Smooth scroll animation
  const duration = 2000;
  const startValue = canvasViewport.scrollLeft;

  smoothScroll(canvasViewport, startValue, scrollValue, duration).then(() => {
    const appContainer = document.createElement('div');
    trainingNode.appendChild(appContainer);
    const widget = createRoot(appContainer);
    widget.render(<PopupThree/>);
  });
}