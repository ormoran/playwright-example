import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('WP.pl homepage', () => {
  
  test('loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyPageLoaded();
  });

});