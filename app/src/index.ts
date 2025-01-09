import { startGuideOne } from './guide-one/function';

// Start the guide
function init() {
  setTimeout(() => {
    startGuideOne();
  }, 500);
}

init();