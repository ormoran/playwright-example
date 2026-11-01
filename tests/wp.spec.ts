import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Weryfikacja strony głównej WP.pl', () => {
  
  test('Powinien zawierać tekst wirtualna na stronie głównej', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Wejście na stronę
    await homePage.navigate();

    // 2. Kliknięcie zgody na cookies (jeśli występuje)
    await homePage.acceptCookiesIfPresent();

    // 3. Weryfikacja obecności tekstu
    await homePage.verifyTextPresent('wirtualna polska');
  });

});