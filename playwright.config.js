// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Use timeout when need to override default test timeout of 30 seconds.
  timeout: 40 * 1000, // maximum time one test can run
  expect: {
    timeout: 5000 // assertion validation timeout
  },
  
  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry',
  }
});

