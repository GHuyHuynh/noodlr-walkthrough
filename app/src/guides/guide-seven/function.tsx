import React from "react";
import { css as emotionCss } from "@emotion/react";
import { keyframes } from "@emotion/react";

export function StartCompletePopup() {
  console.log('StartCompletePopup');
  
  // Select button and its child span
  const buildAppButton = document.querySelector('button[aria-label="icon-copy"]');
  const deployedCodeSpan = document.querySelector('button[aria-label="icon-copy"] .material-symbols-outlined');

  if (!buildAppButton || !deployedCodeSpan) {
    throw new Error('Could not find build app button or its children');
  }

  // Add click handlers to both elements
  buildAppButton.addEventListener('click', (e) => {
    console.log('Build app button clicked');
  });

  deployedCodeSpan.addEventListener('click', (e) => {
    console.log('Deployed code span clicked');
  });


}