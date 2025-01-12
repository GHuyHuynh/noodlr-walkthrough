# Noodlr Walkthrough

## Demo
https://github.com/user-attachments/assets/afad1f8e-9c63-4ae2-8858-df1b0f02495f

## Description
A Chrome extension that adds walk-through functionality to noodlr.ai to help first-time users understand the platform's AI model application building capabilities.

Built with React, Material-UI, and TypeScript to be easily integrated with the noodlr.ai source code.
Only uses Material-UI and emotionCSS to avoid adding new JS dependencies with noodlr.ai dependencies.

## Install
1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Load the extension in Chrome by going to `chrome://extensions/` or click "Manage Extensions" and clicking `Load unpacked` and selecting the `/app/dist` folder.

## Dev Mode
1. Run `npm run dev`
2. Load the extension in Chrome by going to `chrome://extensions/` or click "Manage Extensions" and clicking `Load unpacked` and selecting the `/app/dist` folder.
Built with React, Material-UI, and TypeScript to be easily integrated with the noodlr.ai source code.
Only uses Material-UI and emotionCSS to avoid adding new JS dependencies with noodlr.ai dependencies.

## Repository Structure

### Overview
Application is develop using Webpack to compile React and Node dependencies into a single `contentSctipt.js` file to load into the Chrome extension. 

Webpack configuration is located in the `/app` directory and consist of 2 modes: `development` and `production`.
- `webpack.dev.js` mode uses `--watch` flag and add JS map code for debugging and hot reloading.\
- `webpack.prod.js` mode minifies the code and removes JS map code for production.

### Directories

- `/app`: application code
  - `/app/dist` (after running `npm run dev` or `npm run build`): built extension code
  - `/app/src`: React source code
    - `/app/src/index.ts`: entry point for React application
- `/web-DOM`: HTML component copy from the DOM using Chrome dev tools
