import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.wp.pl');
  }

  // Wp.pl wyświetla baner RODO/cookies, warto go obsłużyć, aby nie zasłaniał elementów
  async acceptCookiesIfPresent() {
    const cookieButton = this.page.locator('button:has-text("Przejdź do serwisu"), button:has-text("Akceptuję")').first();
    if (await cookieButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await cookieButton.click();
    }
  }

  async verifyTextPresent(text: string) {
    // Sprawdzamy czy wskazany tekst (np. "wirtualna") znajduje się na stronie (wielkość liter ignorowana)
    const locator = this.page.locator(`text=${text}`).first();
    await expect(locator).toBeVisible();
  }
}