import React from 'react';
import { createRoot } from 'react-dom/client';
import { GuideOne } from './components/guide-one';
import { GuideTwo } from './components/guide-two';
import { GuideThree } from './components/guide-three';

/**
 * Script to start the guide
 * More of a traditional JS code since the broswer does not work well with React
 */
  
function startGuideOne() {
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
  widget.render(<GuideOne position={position}/>);

  targetElement.addEventListener('dblclick', () => {
    widget.unmount();
    startGuideTwo();
  });
}

function startGuideTwo() {
  // Get Collapse button element
  const collapseButton = document.querySelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-oofez5');
  if (!collapseButton) {
    throw new Error('Failed to find Collapse button element');
  }

  const rect = collapseButton.getBoundingClientRect();
  const position = {
    middle: rect.top + rect.height / 2,
    right: rect.right
  };

  const appContainer = document.createElement('div');
  collapseButton.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<GuideTwo position={position}/>);

  collapseButton.addEventListener('click', () => {
    widget.unmount();
    startGuideThree();
  });
}

function startGuideThree() {
  // Get the canvas from the DOM
  const canvasViewport = document.querySelector('.canvas-target-ref');
  if (!canvasViewport) {
    throw new Error('Failed to find canvas viewport');
  }

  // Get the Training node from the DOM
  const trainingNode = Array.from(document.querySelectorAll('.css-106ak42')).find(el => 
    el.querySelector('.layer-header .title')?.textContent?.includes('Training')
  );
  if (!trainingNode) {
    throw new Error('Failed to find Training Node element');
  }

  // Get positions
  const viewportRect = canvasViewport.getBoundingClientRect();
  const nodeRect = trainingNode.getBoundingClientRect();
  const scrollLeft = nodeRect.left - viewportRect.left + canvasViewport.scrollLeft;

  // Scroll to the Training node
  canvasViewport.scrollLeft = scrollLeft;
}

// Start the guide
function init() {
  startGuideOne();
}

init();