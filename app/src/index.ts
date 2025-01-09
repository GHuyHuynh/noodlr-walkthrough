import { startGuideOne } from './guides/guide-one/function';

// Start the guide
function init() {
  //Delay the start of the guide to allow the page to load
  setTimeout(() => {
    startGuideOne();
  }, 500);
}

init();