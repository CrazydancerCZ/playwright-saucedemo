import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continue: Locator;
    readonly finish: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByTestId('firstName');
        this.lastNameInput = page.getByTestId('lastName');
        this.postalCodeInput = page.getByTestId('postalCode');
        this.continue = page.getByTestId('continue');
        this.finish = page.getByTestId('finish');
        this.completeHeader = page.getByTestId('complete-header');
    };
    async fillBuyerFields(firstName: string, lastName: string, zip: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(zip);
    }
    async clickContinue() {
        await this.continue.click();
    }

    async clickFinish() {
        await this.finish.click();
    }


};