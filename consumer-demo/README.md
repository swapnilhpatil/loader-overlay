# Consumer Demo

This is a minimal standalone React application created to demonstrate how to consume the `loader-overlay` package locally before publishing it to the npm registry.

## Local Installation Guide

This project is linked to the local implementation of `loader-overlay` located in the parent directory.

To replicate this setup in your own projects:

1. **Build the Library:**
   Ensure the parent library is fully built first. From the root directory (`../`), run:
   ```bash
   npm run build
   ```

2. **Install Locally:**
   Instead of installing via an npm version or registry tag, install the package using a local file path. Run the following command in your consumer project:
   ```bash
   npm install file:../
   ```
   
   *(You must adjust the path to point to your `loader-overlay` root directory. Here are some examples of relative and absolute paths):*
   - **Same parent folder:** `npm install file:../loader-overlay`
   - **Two folders up:** `npm install file:../../libraries/loader-overlay`
   - **Absolute path (Windows):** `npm install file:C:/Projects/loader-overlay`
   - **Absolute path (Mac/Linux):** `npm install file:/Users/name/Projects/loader-overlay`

3. **Usage:**
   Once installed, you can import and use the component seamlessly as if it were downloaded from npm:
   ```jsx
   import LoaderOverlay from 'loader-overlay';
   
   export default function App() {
     return <LoaderOverlay show={true} message="Loading via Local NPM package!" />;
   }
   ```

## Running this Demo

If you want to spin up this specific demo:

1. Navigate to this directory:
   ```bash
   cd consumer-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   *(This will automatically pull in `loader-overlay` from the parent folder).*
3. Start the dev server:
   ```bash
   npm run dev
   ```
