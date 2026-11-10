# playwright-example

A small Playwright end-to-end testing example using TypeScript. The test suite checks that the WP.pl homepage loads in Chromium and Firefox.

## Requirements

- Node.js 20 or later
- npm (included with Node.js)

## Setup

1. Clone the repository and open its directory:

   ```sh
   git clone <repository-url>
   cd playwright-example
   ```

2. Install the project dependencies:

   ```sh
   npm ci
   ```

3. Install the browsers used by the configured Playwright projects:

   ```sh
   npx playwright install
   ```

   On Linux CI machines, install the required operating-system dependencies as well:

   ```sh
   npx playwright install --with-deps
   ```

## Running the tests

Run the test suite in both configured browsers:

```sh
npm test
```

Run the test in just one browser:

```sh
npm run test:chromium
npm run test:firefox
```

Run tests with the Playwright UI:

```sh
npm run test:ui
```

The test checks that the WP.pl homepage loads and has a non-empty page title. The Playwright configuration saves screenshots on failure and traces on retry.

## Test report

After a test run, open the HTML report with:

```sh
npm run test:report
```

Playwright creates the report in `playwright-report/`. Test results and reports are ignored by Git.

## Project structure

```text
pages/
  HomePage.ts         Page object for the WP.pl homepage
tests/
  wp.spec.ts          Homepage loading test
playwright.config.ts  Browser projects and test settings
```

The GitHub Actions workflow runs the test suite on pushes and pull requests targeting `main` or `master`.
