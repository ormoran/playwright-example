import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Katalog, w którym Playwright szuka testów
  testDir: './tests',
  
  // Maksymalny czas trwania pojedynczego testu (np. 30 sekund)
  timeout: 30 * 1000,
  
  // Włączenie zrównoleglenia testów
  fullyParallel: true,
  
  // Blokada użycia .only na środowisku CI
  forbidOnly: !!process.env.CI,
  
  // Liczba ponowień testu w przypadku awarii (na CI warto mieć 2, lokalnie 0)
  retries: process.env.CI ? 2 : 0,
  
  // Liczba workerów (procesów równoległych)
  workers: process.env.CI ? 1 : undefined,
  
  // Konfiguracja raportów (domyślny raport HTML)
  reporter: 'html',

  // Globalne ustawienia dla kontekstu przeglądarki
  use: {
    // Bazowy URL – możesz go używać w testach, podając ścieżki względne
    baseURL: 'https://www.wp.pl',

    // Zapisuj ślad (trace) w przypadku pierwszego ponowienia lub awarii (super przydatne do debugowania)
    trace: 'on-first-retry',

    // Automatycznie rób zrzut ekranu tylko wtedy, gdy test upadnie
    screenshot: 'only-on-failure',

    // Opcjonalnie: nagrywaj wideo z przebiegu testu w razie błędu
    video: 'retain-on-failure',
  },

  // Konfiguracja przegródek / projektów testowych
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // Możesz odkomentować, jeśli chcesz testować też na WebKit (Safari)
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});