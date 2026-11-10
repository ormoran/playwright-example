import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where Playwright looks for tests
  testDir: './tests',
  
  // Maximum duration of a single test (for example, 30 seconds)
  timeout: 30 * 1000,
  
  // Run tests in parallel
  fullyParallel: true,
  
  // Prevent accidental test.only usage in CI
  forbidOnly: !!process.env.CI,
  
  // Retry failed tests twice in CI and never locally
  retries: process.env.CI ? 2 : 0,
  
  // Use one worker in CI and the default locally
  workers: process.env.CI ? 1 : undefined,
  
  // Use the HTML reporter
  reporter: 'html',

  // Shared browser context settings
  use: {
    // Base URL for relative paths in tests
    baseURL: 'https://www.wp.pl',

    // Record a trace on the first retry
    trace: 'on-first-retry',

    // Take a screenshot only when a test fails
    screenshot: 'only-on-failure',

    // Retain video only when a test fails
    video: 'retain-on-failure',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Uncomment to add WebKit (Safari) coverage
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});