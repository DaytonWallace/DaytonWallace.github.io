import { updateDirection } from './networking';

function onMouseInput(e) {
  handleInput(e.clientX, e.clientY);
}

function onTouchInput(e) {
  const touch = e.touches[0];
  handleInput(touch.clientX, touch.clientY);
}

function handleInput(x, y) {
  const dir = Math.atan2(x - window.innerWidth / 2, window.innerHeight / 2 - y);
  updateDirection(dir);
}

export function startCapturingInput() {
  document.addEventListener('mousemove', onMouseInput);
  document.addEventListener('touchstart', onTouchInput);
  document.addEventListener('touchmove', onTouchInput);
}

export function stopCapturingInput() {
  document.removeEventListener('mousemove', onMouseInput);
  document.removeEventListener('touchstart', onTouchInput);
  document.removeEventListener('touchmove', onTouchInput);
}

// lemme check if it works.