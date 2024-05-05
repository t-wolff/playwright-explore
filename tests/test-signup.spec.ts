import { test, expect } from '@playwright/test';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.getByTestId('open-registration-form-button').click();
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByText('What’s your name?').click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('test');
  await page.getByLabel('Last name').click();
  await page.getByLabel('Last name').fill('test');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByText('You\'ll use this when you log').click();
  await page.getByLabel('Mobile number or email').click();
  await page.getByLabel('Mobile number or email').fill('test');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByLabel('Mobile number or email').click();
  await page.getByLabel('Mobile number or email').fill('test@');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByText('Please enter a valid mobile').click();
  await page.getByLabel('Mobile number or email').click();
  await page.getByLabel('Mobile number or email').fill('test@test.com');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByLabel('New password').click();
  await page.getByLabel('New password').fill('testtest');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  const emailConfirmationExists = await page.waitForSelector('input[name="reg_email_confirmation__"]', { timeout: 2000 }).then(() => true).catch(() => false);
  if (emailConfirmationExists) {
    await page.getByLabel('Re-enter email').fill('test@test.com');
  }

  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByLabel('Your age').click();
  await page.getByLabel('Your age').fill('5');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByText('Please choose a gender. You').click();
  await page.getByText('Custom').click();
  await expect(page.getByLabel('Select your pronoun')).toContainText('Select your pronoun');
  await expect(page.locator('#custom_gender_container')).toContainText('Your pronoun is visible to everyone.');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByText('Please select your pronoun.').click();
  await page.getByLabel('Select your pronoun').selectOption('6');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByRole('button', { name: 'OK' }).click();
  await delay(12000);
  await expect(page.locator('#reg_error_inner')).toContainText('Too many users have this email listed as pending.');
});