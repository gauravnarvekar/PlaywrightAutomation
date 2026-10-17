/*
Assignment3:
Write script for Login  and Logout Functionality of Orangehrm using cssSelector
Use URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*/
import {test, expect, Locator} from '@playwright/test';
test('Assignment3:Login and Logout Functionality of Orangehrm using cssSelector', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await page.waitForTimeout(30000);

    // by using tagname with attribute
    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    // await page.waitForTimeout(5000);

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    console.log('Login successful, navigated to dashboard page');

    //by using tagname with class
    await page.locator("i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
    // await page.waitForTimeout(5000);
    //by using tagname with combimation of class and attribute
    await page.locator("a.oxd-userdropdown-link[href='/web/index.php/auth/logout']").click();
    // await page.waitForTimeout(30000);

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('Logout successful, navigated back to login page');

});