import { test, expect } from '../fixtures/fixtures';
test.use({ storageState: { cookies: [], origins: [] } });


test('login with valid user', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
    await expect(page).toHaveURL(/inventory/);

});


test('add item to cart', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);
    await inventoryPage.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
});

