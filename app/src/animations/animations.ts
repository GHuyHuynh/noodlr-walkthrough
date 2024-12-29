export function smoothScroll(
  viewport: Element, 
  startValue: number, 
  endValue: number, 
  duration: number
): Promise<void> {
  return new Promise((resolve) => {
    const distance = endValue - startValue;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      viewport.scrollLeft = startValue + (distance * easeProgress) - 300;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}