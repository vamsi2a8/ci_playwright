import { test, expect} from '@playwright/test'
import { chromium} from '@playwright/test'
  test('id locator', async ({}) => {


// 1️⃣ Launch browser (set headless to false to see it)
  const browser = await chromium.launch({ headless: false });

  // 2️⃣ Create a new browser context (like a fresh profile)
  const context = await browser.newContext();

  // 3️⃣ Open a new page (tab)
  const page = await context.newPage();

 await page.goto('https://www.facebook.com/login.php');
 await page.locator('id=email').fill('vamsi@getMaxListeners.com');
 await page.locator('id=pass').fill('vamsi');
 await page.locator('id=loginbutton').click();
  });
  

