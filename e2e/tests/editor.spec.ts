import { expect, test } from '@playwright/test'

test.describe('Editor', () => {
  const baseUrl: string = 'http://localhost:3000/editor'

  test('has page title', async ({ page }) => {
    await page.goto(baseUrl)

    expect(page).toHaveTitle('Editor')
  })

  test('drag and drop a product reorders a row', async ({ page }) => {
    const expectedOrder = ['White jeans150', 'Black jeans200', 'Blue jeans100']
    await page.goto(baseUrl + '/1,2,3')

    const firstProduct = page.locator('.column').first()
    const lastProduct = page.locator('.column').last()
    await firstProduct.dragTo(lastProduct)

    const productsAfter = await page.$$eval('.column', (columns) => {
      return columns.map((column) => {
        return column.textContent
      })
    })

    expect(productsAfter).toEqual(expectedOrder)
  })

  test('drag and drop a row reorders all rows', async ({ page }) => {
    const expectedOrder = ['Blue jeans100', 'Blue jeans100White jeans150Black jeans200']
    await page.goto(baseUrl + '/1,2,3,4')

    const firstRow = page.locator('.row').first()
    const lastRow = page.locator('.row').last()
    await firstRow.dragTo(lastRow, { sourcePosition: { x: 0, y: 0 } })

    const rowsAfter = await page.$$eval('.row', (rows) => {
      return rows.map((row) => {
        return row.textContent
      })
    })

    expect(rowsAfter).toEqual(expectedOrder)
  })
})
