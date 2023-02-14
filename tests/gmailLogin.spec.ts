import { test, expect } from '@playwright/test';

test('Example to demonstrate text input and basic assertions with Gmail', async ({ page }) => {

  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S218541836%3A1676377310734771&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAZAdQ&hl=en&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHffyODM7sa3GgnZDihHsOkwomVRDC_XAun7rcXhtRcVNhr2QUT2MJ65RMEI-ptv-gpDaz2DcQ')

  await expect(page.locator('//*[@id="identifierId"]')).toBeVisible({ timeout: 2000 })

  await page.fill('//*[@id="identifierId"]', 'automationtest023@gmail.com')

  await page.click('//*[@id="identifierNext"]/div/button')

  await page.fill('//*[@id="password"]/div[1]/div/div[1]/input', 'Luckyboy@77')

  await page.click('//*[@id="passwordNext"]/div/button')

  await expect(page.locator('//*[@id="material-bar-custom-product-name"]/a')).toBeVisible({ timeout: 5000 })

  await expect(page.locator('//*[@id="material-bar-custom-product-name"]/a')).toContainText('Gmail Help')

})