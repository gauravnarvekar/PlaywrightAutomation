import {test} from '@playwright/test';
test('TC002_GettitleandvalidateUrl', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const pageTitle: string = await page.title();
    const pageUrl = await page.url();
    if (pageTitle === 'Google') {
        console.log('Page title is correct:', pageTitle);
    }
    else {
        console.log('Page title is incorrect:', pageTitle);
    }
})