import { test, expect } from '@playwright/test';




test('Login with valid user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
})

test('Login with locked out user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Sorry, this user has been locked out')).toBeVisible();
    await expect(page).not.toHaveURL(/inventory/);
})



test.describe('Logged in user', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.getByTestId('username').fill('standard_user');
        await page.getByTestId('password').fill('secret_sauce');
        await page.getByTestId('login-button').click();

    });










});

const users = ['standard_user', 'problem_user', 'visual_user'];

for (const user of users) {
    test(`login works for ${user}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.getByTestId('username').fill(user);
        await page.getByTestId('password').fill('secret_sauce');
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL(/inventory/);

    });

}

const badLogins = [
    { username: 'locked_out_user', password: 'secret_sauce', error: 'Sorry, this user has been locked out' },
    { username: 'standard_user', password: 'wrong', error: 'Username and password do not match' },
    { username: '', password: 'secret_sauce', error: 'Username is required' },
];

for (const login of badLogins) {
    test(`Login message is correct for ${login.username}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
        await page.getByTestId('username').fill(login.username);
        await page.getByTestId('password').fill(login.password);
        await page.getByTestId('login-button').click();
        await expect(page.getByText(login.error)).toBeVisible();



    })
};

