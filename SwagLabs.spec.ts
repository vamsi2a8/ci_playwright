import {test, expect} from "@playwright/test"

test('check the Login in swagLabs', async({page})=>
{
   await page.goto("https://www.saucedemo.com/")

   const mytitle=await page.title();
   console.log('My title :',mytitle)

   await expect(page).toHaveTitle('Swag Labs')

   await page.getByPlaceholder('Username').fill('standard_user')

   await page.getByPlaceholder('Password').fill('secret_sauce')

   await page.getByRole('button',{name:'Login'}).click();

   //await page.getByRole('button',{name:'add-to-cart-sauce-labs-backpack'}).click();
   await page.locator('#add-to-cart-sauce-labs-backpack').click();
   //await page.waitForTimeout(4000);


})













