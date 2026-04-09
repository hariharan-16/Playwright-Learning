const {test, expect} = require('@playwright/test');

test('TC-001: Example test', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

test('TC-002: Another example test', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('[type="password"]').fill('learning');
  await page.locator('#signInBtn').click();

  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toContainText('Old password');
});

test('TC-003: Valid Login', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Using locators with variables for better readability and maintainability
  const username = page.locator('#username');
  const password = page.locator('[type="password"]');
  const signInButton = page.locator('#signInBtn');
  const cardTitle = page.locator('.card-body a');

  // Filling in the login credentials and clicking the sign-in button
  await username.fill('rahulshettyacademy');
  await password.fill('Learning@830$3mK2');
  await signInButton.click();

  // Using nth() to access specific elements in the cardTitle locator
  console.log(await cardTitle.first().textContent());
  console.log(await cardTitle.nth(1).textContent());
  console.log(await cardTitle.last().textContent());

  // Using allTextContents() to get an array of text contents from all elements matching the cardTitle locator
  console.log(await cardTitle.allTextContents());
});


test.only('TC-004: Test Login and Register', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await page.locator('.text-reset').click();

  await page.locator('#firstName').fill('Hariharan');
  await page.locator('#lastName').fill('Raveendran');
  await page.locator('#userEmail').fill('harioz1515@gmail.com');
  await page.locator('#userMobile').fill('1234567890');
  await page.locator('.custom-select').selectOption({label: 'Student'});
  await page.locator('[ value = "Male"]').check();
  await page.locator('#userPassword').fill('Test@123');
  await page.locator('#confirmPassword').fill('Test@123');
  await page.locator('[type = "checkbox"]').check();
  await page.locator('#login').click();
  await page.locator('.text-reset').click();

  await page.locator('#userEmail').fill('harioz1515@gmail.com');
  await page.locator('#userPassword').fill('Test@123');
  await page.locator('#login').click();

  //page.waitForLoadState('networkidle'); // wait for the network to be idle ( All API calls are completed ).

  const cards = await page.locator('.card-body b'); // (add .waitFor()) Another way to use waitFor() for the elements to be visible.

  console.log(await cards.first().textContent());
  console.log(await cards.allTextContents());

});