# Next.js 15 Default Export Name Mismatch

This repository demonstrates a subtle bug in Next.js 15 related to a mismatch between the file name (e.g., `pages/index.js`) and the name of the default export in that file.  If there's a discrepancy, Next.js might throw an unexpected error.  This isn't always caught by standard linters. 

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

Observe the error message generated in the console if the export name doesn't match the file name convention. 

## Solution

Ensure the default export's name matches the file name as expected by Next.js conventions.