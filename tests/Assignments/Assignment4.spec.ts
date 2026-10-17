/*Assignment 4: Automate from website 3 test cases with css selector
Navigate to this application 
https://practicetestautomation.com/practice-test-login/

TestData:
Use next credentials to execute Login:
Username: student
Password: Password123

Test case 1: Positive LogIn test
Open page, Type username student into Username field, Type password Password123 into Password field, Push Submit button
Verify new page URL contains practicetestautomation.com/logged-in-successfully/
Verify new page contains expected text ('Congratulations' or 'successfully logged in')
Verify button Log out is displayed on the new page.
*/
import { test, expect, Locator } from '@playwright/test';
test('Assignment 4: Test case 1: Positive LogIn test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("#username").fill('student');
    await page.locator("input#password").fill('Password123');
    await page.locator("button#submit").click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    console.log('Login successful, navigated to logged-in-successfully page and url contains practicetestautomation.com/logged-in-successfully/');

    let expectedText: Locator = page.locator("p.has-text-align-center.wp-block-paragraph");
    let text: string = await expectedText.innerText();
    if (text.includes('Congratulations') || text.includes('successfully logged in')) {
        console.log('New page contains expected text : Congratulations or successfully logged in');
    }
    else {
        console.log('New page does not contains expected text Congratulations or successfully logged in');
    }

    let logoutButton: Locator = page.locator("a[href='https://practicetestautomation.com/practice-test-login/']");
    console.log("Is logout button displayed: ", await logoutButton.isVisible());

})

/*
Test case 2: Negative username test
Open page
Type username incorrectUser into Username field
Type password Password123 into Password field
Push Submit button
Verify error message is displayed
Verify error message text is Your username is invalid!
*/
test('Assignment 4: Test case 2: Negative username test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator("#username").fill('testuser');
    await page.locator("input#password").fill('Password123');
    await page.locator("button#submit").click();

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    let errorComponent: Locator = page.locator("div#error");
    console.log("Error component found: ", await errorComponent.isVisible());
    let text1: string = await errorComponent.innerText();
    console.log("Error message text is: ", text1);
    if(text1===('Your username is invalid!')){
        console.log('Error message text matched exactly and test case is passed');
    }else{
        console.log('Error message text not matched and test case is failed');
    }

})

/*
Test case 3: Negative password test
Open page
Type username student into Username field
Type password incorrectPassword into Password field
Push Submit button
Verify error message is displayed
Verify error message text is Your password is invalid!
*/
test('Assignment 4: Test case 3: Negative password test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator("#username").fill('student');
    await page.locator("input#password").fill('admin123');
    await page.locator("button#submit").click();

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    let errorComponent: Locator = page.locator("div#error");
    console.log("Error component found: ", await errorComponent.isVisible());
    let text1: string = await errorComponent.innerText();
    console.log("Error message text is: ", text1);
    if(text1===('Your password is invalid!')){
        console.log('Error message text matched exactly and test case is passed');
    }else{
        console.log('Error message text not matched and test case is failed');
    }

})