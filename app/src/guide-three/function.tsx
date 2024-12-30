import React from 'react';
import { createRoot } from 'react-dom/client';
import { PopupThree } from './popup-three';
import { smoothScroll } from '../animations/animations';
import { startGuideFour } from '../guide-four/function';

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

  const playButton = trainingNode.querySelector('.layer-header .control[aria-label="Train Model"]');
  if (!playButton) {
    throw new Error('Failed to find play button');
  }

  // Initial scroll calculation
  const viewportRect = canvasViewport.getBoundingClientRect();
  const nodeRect = trainingNode.getBoundingClientRect();
  const scrollValue = nodeRect.left - viewportRect.left + canvasViewport.scrollLeft;

  // Start scroll animation
  const duration = 2000;
  const startValue = canvasViewport.scrollLeft;

  smoothScroll(canvasViewport, startValue, scrollValue, duration).then(() => {
    // Get updated positions after scroll
    const updatedNodeRect = trainingNode.getBoundingClientRect();
    
    const position = {
      top: updatedNodeRect.top,
      left: updatedNodeRect.left,
      right: updatedNodeRect.right,
      width: updatedNodeRect.width,
      height: updatedNodeRect.height
    };

    const appContainer = document.createElement('div');
    trainingNode.appendChild(appContainer);
    const widget = createRoot(appContainer);
    widget.render(<PopupThree position={position} />);

    playButton.addEventListener('click', () => {
      widget.unmount();
      startGuideFour();
    });
  });
}