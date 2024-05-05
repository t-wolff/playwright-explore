import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://www.facebook.com/');
await page.getByTestId('royal_email').click();
await page.getByTestId('royal_email').fill('huhuhu@test.com');
await page.locator('#passContainer').click();
await page.getByTestId('royal_pass').fill('12345678');
await expect(page.getByTestId('royal_pass')).toBeVisible();
await page.goto('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzE0OTM0ODU0LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D');
await page.goto('https://www.facebook.com/');
await page.getByTestId('royal_email').click();
await page.getByTestId('royal_email').fill('juujuju565656@test.com');
await page.getByTestId('royal_pass').click();
await page.getByTestId('royal_pass').fill('13456789');
await expect(page.getByTestId('royal_pass')).toBeVisible();
await page.getByTestId('royal_login_button').click();
await expect(page.locator('#email_container')).toContainText('The email you entered isn’t connected to an account.');
});