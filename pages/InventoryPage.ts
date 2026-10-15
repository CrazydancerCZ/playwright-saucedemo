import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly sortDropdown: Locator;
    readonly checkout: Locator;
    readonly shoppingCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.getByTestId('shopping-cart-badge');
        this.sortDropdown = page.getByTestId('product-sort-container');
        this.checkout = page.getByTestId('checkout');
        this.shoppingCart = page.getByTestId('shopping-cart-link');
    }
    async addToCart(productTestId: string) {
        await this.page.getByTestId(productTestId).click();

    }

    async goto() {
        await this.page.goto(('/inventory.html'));
    }
    async sortByOption(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async continueCheckout() {
        await this.checkout.click();


    }

    async openShoppingCart() {
        await this.shoppingCart.click();
    }
};
