import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { GuideOne } from './components/guide-one';

function init() {
  // Select Iris Classifier element
  const irisSelectElements = document.querySelectorAll('.css-5gmxj4');
  const targetElement = Array.from(irisSelectElements).find(el => 
    el.textContent?.includes('Iris Classifier')
  );
  if (!targetElement) {
    throw new Error('Failed to find Iris Classifier element');
  }


  const appContainer = document.createElement('div');
  targetElement.appendChild(appContainer);
  const widget = createRoot(appContainer);
  widget.render(<GuideOne />);
}

init();