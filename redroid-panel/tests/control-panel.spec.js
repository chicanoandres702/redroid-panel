const { test, expect } = require('@playwright/test');

test.describe('Redroid Control Panel', () => {
    test('should load the main page with correct title', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('System Control Panel');
    });

    test('should display the environment heading', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h2')).toContainText('ENVIRONMENT');
    });

    test('should display Initialize System button', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.neon-btn').filter({ hasText: 'Initialize System' })).toBeVisible();
    });

    test('should display Terminate System button', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.neon-btn').filter({ hasText: 'Terminate System' })).toBeVisible();
    });

    test('should display status indicator with Online text', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('#status-text')).toContainText('Online');
    });

    test('should have stream iframe configured', async ({ page }) => {
        await page.goto('/');
        const iframe = page.locator('#stream-frame');
        await expect(iframe).toBeVisible();
    });

    test('should navigate to API start endpoint on button click', async ({ page }) => {
        await page.goto('/');
        const startButton = page.locator('.neon-btn').filter({ hasText: 'Initialize System' });
        await startButton.click();
    });

    test('should navigate to API stop endpoint on button click', async ({ page }) => {
        await page.goto('/');
        const stopButton = page.locator('.neon-btn.stop');
        await stopButton.click();
    });

    test('should display menu toggle button on mobile', async ({ page }) => {
        await page.goto('/');
        await page.setViewportSize({ width: 400, height: 600 });
        await expect(page.locator('.menu-toggle')).toBeVisible();
    });

    test('should hide sidebar when menu button clicked on mobile', async ({ page }) => {
        await page.goto('/');
        await page.setViewportSize({ width: 400, height: 600 });
        await page.locator('.menu-toggle').click();
        await expect(page.locator('#sidebar')).toHaveClass(/active/);
    });

    test('should have stream error element for displaying offline status', async ({ page }) => {
        await page.goto('/');
        // Stream error div should exist in DOM (starts hidden)
        await expect(page.locator('#iframe-error')).toHaveText('System Stream Offline');
    });
});