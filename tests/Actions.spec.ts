import { test, expect } from "@playwright/test"

test('Handling the Actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('playwright')
    await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('playwright')

    await page.getByRole('textbox', { name: 'Enter EMail' }).type('playwright@gmail.com', { delay: 100 });
    await expect(page.getByRole('textbox', { name: 'Enter EMail' })).toHaveValue('playwright@gmail.com')

    await page.getByRole('textbox', { name: 'Enter Phone' }).fill('98765456734');
    await page.getByRole('textbox', { name: 'Address:' }).fill('1-22-23 Hyd');

   
    //Handle the RadioButton 
    await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeVisible()
    await page.getByRole('radio', { name: 'Male', exact: true }).check()
    await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked()
    expect(await page.getByRole('radio', { name: 'Male', exact: true }).isChecked()).toBeTruthy()
    expect(await page.getByRole('radio', { name: 'Female' }).isChecked()).toBeFalsy();


    //Handling the checkBoxs
    await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeVisible()
    await page.getByRole('checkbox', { name: 'Monday' }).check()
    expect(await page.getByRole('checkbox', { name: 'Monday' }).isChecked()).toBeTruthy()
    await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeChecked()

    //uncheck the checkBox
    await page.getByRole('checkbox', { name: 'Monday' }).uncheck()


})



//How to select the multiple checks
test('Handling the CheckBoxs', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const weekNames: string[] = ['Monday', 'Wednesday', 'Friday'];

    for (const dayname of weekNames) 
    {
        await expect(page.getByRole('checkbox', { name: `${dayname}` })).toBeVisible()
        await page.getByRole('checkbox', { name: `${dayname}` }).check()
        expect(await page.getByRole('checkbox', { name: `${dayname}` }).isChecked()).toBeTruthy()
        await expect(page.getByRole('checkbox', { name: `${dayname}` })).toBeChecked()
    }




   // Unselect option
    for (const dayname of weekNames) 
    {
         if(dayname ==='Wednesday')
         {
                await page.getByRole('checkbox', { name: `${dayname}` }).uncheck();
                break;
         }  
    }

    expect(await page.getByRole('checkbox', { name: `Wednesday` }).isChecked()).toBeFalsy()


  
})











