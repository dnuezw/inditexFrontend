import { expect, test } from "@playwright/test";

test.describe('Editor', () => {
  const baseUrl: string = 'http://localhost:3000/editor'

  test('has page title', async ({ page }) => {
    await page.goto(baseUrl)

    expect(page).toHaveTitle("Editor")
  })

  test('renders 3 columns', async ({ page }) => {
    await page.goto(baseUrl + '/1,2,3')

    const products = page.locator('.column')

    expect(products).toHaveCount(3)
  })
})