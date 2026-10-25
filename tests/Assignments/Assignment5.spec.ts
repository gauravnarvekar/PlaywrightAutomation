/*
Assignment 5:
Navigate to https://www.amazon.in/ app and search for "macbook pro" and get the search
result along with count in console.
*/

import {test, Locator} from '@playwright/test';

test('Assignment5-Search for macbook pro and get the search result count', async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.locator("input[id *='searchtext']").fill("macbook pro");
    await page.waitForTimeout(2000);
    
    let searchResults:string[] = await page.locator("div.left-pane-results-container div.s-suggestion.s-suggestion-ellipsis-direction").allInnerTexts();
    console.log(searchResults);
    console.log("Search result count:" +searchResults.length);

});