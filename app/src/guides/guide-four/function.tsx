import { keyframes } from '@emotion/react';
import { css as emotionCss } from '@emotion/css';
import { startGuideFive } from '../guide-five/function';

/* Style from Uiverse.io at Wendell47 */ 
const effectAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const buttonStyle = emotionCss`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10rem;
  transition: all 0.02s;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  color: rgb(37, 37, 37);
  z-index: 0;
  box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: rgb(193, 228, 248);
    color: rgb(33, 0, 85);
  }

  &:active {
    transform: scale(0.97);
  }

  .hoverEffect {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hoverEffect div {
    background: rgb(222, 0, 75);
    background: linear-gradient(
      90deg,
      rgba(222, 0, 75, 1) 0%,
      rgba(191, 70, 255, 1) 49%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(20px);
    animation: ${effectAnimation} infinite 3s linear;
    opacity: 0.5;
  }

  &:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
  }
`;

export function startGuideFour() {
  const buttons = document.querySelectorAll(
    'button.MuiButtonBase-root.MuiButton-text.MuiButton-textPrimary'
  );
  
  const okButton = Array.from(buttons).find(
    button => button.textContent === 'OK'
  ) as HTMLButtonElement;
  
  if (!okButton) {
    throw new Error('Could not find OK button');
  }

  okButton.textContent = 'Start Training';

  okButton.className = '';
  okButton.className = buttonStyle; 

  // Create and append hover effect elements
  const hoverEffect = document.createElement('div');
  hoverEffect.className = 'hoverEffect';
  const hoverEffectInner = document.createElement('div');
  hoverEffect.appendChild(hoverEffectInner);
  okButton.appendChild(hoverEffect);

  okButton.addEventListener('click', () => {    
    startGuideFive();
  });
}
