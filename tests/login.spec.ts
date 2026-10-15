import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.use({ storageState: { cookies: [], origins: [] } });


test('login with valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

test('add item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
});


