const {test, expect} = require('@playwright/test');

test('TC-001: Radio Button Handle', async ({page}) =>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userRadioInput = page.locator('.customradio').nth(1);
    await userRadioInput.click();
    await page.locator('#okayBtn').click();

    await expect(userRadioInput).toBeChecked();
});

test('TC-002: Dropdown Handle', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const dropDownSelect = page.locator('select.form-control');
    await dropDownSelect.selectOption('Student');

    console.log(await dropDownSelect.inputValue());
});

test('TC-003: Blink Text Handle', async ({page}) =>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const blinkText = page.locator('[href*="documents-request"]');
    await expect(blinkText).toHaveAttribute('class', 'blinkingText');
});

test.only('TC-004: Handling Windows', async ({page, context}) =>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const blinkText = page.locator('[href*="documents-request"]');

    const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new page to open
    await blinkText.click() // Click the link to open the new page
    ]);

    const text = await newPage.locator('//p[@class = "im-para red"]').textContent();
    const arrayText = text.split('@');
    const domain = arrayText[1].split(" ")[0];

    console.log(domain);
    const userNameTextField = page.locator('#username');
    await userNameTextField.fill(domain);
    console.log(await userNameTextField.inputValue());
});