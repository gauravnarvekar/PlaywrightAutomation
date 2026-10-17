import {test} from '@playwright/test';

test('TC001_FirstCode_get the page title', async ({ page }) => {
    await page.goto('https://www.google.com/');
    console.log(await page.title());
})