import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('username').fill(process.env.SAUCE_USERNAME!);
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD!);
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({ path: authFile });
});