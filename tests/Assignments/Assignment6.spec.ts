/*
Assignment 6:
Navigate to https://tutorialsninja.com/demo/index.php?route=account/login app
and get the all footer links text in console.
*/
import {test, Locator} from '@playwright/test';

test('Assignment6-Get all footer links text', async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    let allFooterLinks:string[] = await page.locator("footer a").allInnerTexts();
    console.log(allFooterLinks);
});