import React from "react";
import { createRoot } from "react-dom/client";
import { CongratsPopup } from "./congrats-popup";

export function startCompletePopup() {
  const downloadButton = document.querySelector(
    'button.MuiButton-containedPrimary[aria-label*="download"]'
  ) as HTMLButtonElement | null;
  if (!downloadButton) {
    throw new Error('Download button not found in DOM');
  }

  downloadButton.addEventListener('click', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(<CongratsPopup />);
  });
}