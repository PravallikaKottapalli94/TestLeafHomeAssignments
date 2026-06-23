import test, { expect,Page } from "@playwright/test";

export async function createLeadLeafTaps(
  page: Page,
  companyName: string,
  firstName: string,
  lastName: string
) {
  await page.goto("http://leaftaps.com/opentaps/");
  await page.locator('#username').fill('democsr');
  await page.locator('#password').fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
  await page.getByRole('link', { name: 'Create Lead' }).click();
  await page.locator("//input[@id='createLeadForm_companyName']").fill('Electonic Arts');
  await page.locator("//input[@id='createLeadForm_firstName']").fill('Pravallika');
  await page.locator("//input[@id='createLeadForm_lastName']").fill('Kottapalli'); 
  await page.locator(".smallSubmit").click();
}

export async function LoginSalesForce(
  page: Page,
) {
  await page.goto("https://login.salesforce.com/");
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('#Login').click();
}

// creating a test case to verify the createLead function
test.only("Verify createLead function", async ({ page }) => {
  await createLeadLeafTaps(page, "Electonic Arts", "Pravallika", "Kottapalli");
  await expect(page.locator("//span[@id = 'viewLead_firstName_sp']")).toContainText("Pravallika");
});

// creating a test case to verify the editLead function
test.only("Verify lead creation with different details", async ({ page }) => {
  await createLeadLeafTaps(page, "Electonic Arts", "Pravallika", "Kottapalli");
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.locator("//input[@id='updateLeadForm_companyName']").fill('Qualcomm');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.locator("//span[@id = 'viewLead_companyName_sp']")).toContainText("Qualcomm");
});

// creating a test case to verify the createLead function on Salesforce
test.only("Verify createLead function on Salesforce", async ({ page }) => { 
    await LoginSalesForce(page);
    await expect(page.locator(`//button[@title ='App Launcher']`)).toBeVisible();
    await page.locator(`xpath=/html/body/div[4]/div[1]/section/div[1]/div[1]/one-appnav/div/one-app-nav-bar/nav/div/one-app-nav-bar-item-root[3]/one-app-nav-bar-item-dropdown/div/one-app-nav-bar-menu-button/a`).click()
    await page.locator("//a[@role='menuitem']").first().click();
    await page.getByRole('combobox', { name: 'Salutation' }).click();
    await page.getByRole('option', { name: 'Mrs.' }).click();
    await page.locator("//input[@name='lastName']").fill('Kottapalli');
    await page.locator("//input[@name='Company']").fill('HCL');
    await page.locator(`//button[@name='SaveEdit']`).click();
    await expect(page.locator("//slot[@name='primaryField']")).toContainText("Kottapalli");
})

// creating a test case to verify the create individual function and edit on Salesforce
test.only("Verify create individual function on Salesforce", async ({ page }) => { 
    await LoginSalesForce(page);
    await expect(page.locator(`//button[@title ='App Launcher']`)).toBeVisible();
    await page.getByText('More', { exact: true }).click();
    await page.getByRole('menuitem', { name: 'Individuals' }).click();
    await page.getByRole('button', { name: 'Individuals List' }).click();
    await page.getByRole('menuitem', { name: 'New Individual' }).click();
    await expect(page.getByRole('dialog', { name: 'New Individual' })).toBeVisible();
    await page.getByRole('button', { name: 'Salutation --None--' }).click();
    await page.getByRole('option', { name: 'Mrs.' }).click();
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('Kottapalli');
    await page.locator(`//button[@title='Save']`).last().click();
    await expect(page.locator(".uiOutputText").first()).toContainText("Kottapalli");
    await page.locator(`//div[@title='Edit']`).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Pravallika');
    await page.locator(`//button[@title='Save']`).last().click();
    await expect(page.locator(".uiOutputText").first()).toContainText("Pravallika");
})

