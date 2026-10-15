import { test, expect } from '../fixtures/fixtures';




test('add backpack to cart', async ({ page, inventoryPage }) => {
    await page.goto('/inventory.html');
    await inventoryPage.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('Cheapest product', async ({ page, inventoryPage }) => {
    await page.goto('/inventory.html');
    await inventoryPage.sortByOption('Price (low to high)');
    await expect(page.getByTestId('inventory-item-name').first()).toHaveText('Sauce Labs Onesie');

});






test('Finish purchase of 1 item', async ({ inventoryPage, checkoutPage }) => {
    await inventoryPage.goto();
    await inventoryPage.addToCart('add-to-cart-sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openShoppingCart();
    await inventoryPage.continueCheckout();
    await checkoutPage.fillBuyerFields('Tomas', 'Marny', '696969');
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');

});

