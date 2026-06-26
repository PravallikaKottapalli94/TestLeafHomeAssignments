import {test,expect} from "@playwright/test";

test("Window Handling",async({page,context})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') 
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    //Open Help Page which opens in new window
    await page.getByRole('button', { name: 'Salesforce Help' }).click()
    const [newWindow] = await Promise.all([context.waitForEvent('page'),page.getByRole('link', { name: 'Salesforce Help' }).click()])
    await newWindow.waitForLoadState('domcontentloaded')
    //On the new page, click confirm and get the url and title of newpage
    await newWindow.getByRole("button", {name:'Confirm'}).click()
    await expect(newWindow.getByRole("button",{name : "Submit code"})).toBeVisible()
})