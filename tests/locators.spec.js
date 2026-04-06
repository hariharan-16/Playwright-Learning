const {test} = require('@playwright/test');

test('TC-001: Locate by Role', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const primaryButtonByRole = await page.getByRole('button', { name: 'Primary Action' });
    console.log(await primaryButtonByRole.textContent());
});

test('TC-002: Locate by Label', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const emailFieldByLabel = await page.getByLabel('Email Address:');
    await emailFieldByLabel.fill('test');

    console.log(await emailFieldByLabel.inputValue());
})

test('TC-003: Locate by Placeholder', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const phoneFieldByPlaceholder = await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    await phoneFieldByPlaceholder.fill('123-456-7890');
    
    console.log(await phoneFieldByPlaceholder.inputValue());
});

test('TC-004: Locate by Text', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const paragraphByText = await page.getByText('colored text');
    console.log(await paragraphByText.textContent());
});

test('TC-005: Locate by Title', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const linkByTitle = await page.getByTitle('Home page link');
    console.log(await linkByTitle.textContent());
});

test('TC-006: Locate by CSS and Xpath', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const cssLocator = await page.locator('a[class="home-link"]');
    console.log(await cssLocator.textContent());

    //const xpathLocator = await page.locator('.feed-link');
    const xpathLocator = await page.locator('//a[@class="feed-link"]');
    console.log(await xpathLocator.textContent());
});

test.only('TC-007: Filtering Locators', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const submitButtons = await page.locator('//button[@type="submit"]');
    console.log(await submitButtons.filter({ hasText: 'Upload Multiple Files' }).textContent());
});