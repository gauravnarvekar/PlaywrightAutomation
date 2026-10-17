/*
Assignment1: Open website and verify title.
Steps
Launch browser miscrosoft edge
Navigate to website https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Verify page title
Verify URL
Expected Correct title OrangeHRM should display & Correct URL should open
*/

import { test, expect, chromium, Browser, BrowserContext } from '@playwright/test';

test('Assignment1-Open website and verify title', async({page})=>{
    let browser:Browser=await chromium.launch({channel:'msedge',headless:false});
    let context1:BrowserContext= await browser.newContext();
    let page1=await context1.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    await expect(page).toHaveTitle('OrangeHRM');
    console.log('Page title is correct:', await page.title());
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('Page URL is correct:', await page.url());
})
