import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.wp.pl');
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveTitle(/\S/);
  }
}