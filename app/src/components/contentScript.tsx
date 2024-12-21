import React from 'react';

export function ContentScript() {
  console.log('Calling from component');
  
  return (
    <div>
      <h1>Content Script</h1>
      <p>
        This is a content script. It runs in the context of the current page.
      </p>
    </div>
  );
}