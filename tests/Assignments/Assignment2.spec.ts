/*Assignment2:Practice navigation methods.
Steps-Open https://www.amazon.in/, open https://www.google.com/, get the title and print same
Navigate back, get the title and print same
Navigate forward, get the title and print same, Reload page
*/

import {test, expect} from '@playwright/test';

test('Assignment2:Practice navigation methods-', async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    await page.goto('https://www.google.com/');
    let pageTitel=await page.title();
    console.log('page title is: ', pageTitel);
    await page.goBack();
    await page.waitForTimeout(4000);
    let pageTitel1=await page.title();
    console.log('page title after navigating back is: ', pageTitel1);
    await page.goForward();
    await page.waitForTimeout(4000);
    let pageTitel2=await page.title();
    console.log('page title after navigating forward is: ', pageTitel2);
    await page.reload();
})