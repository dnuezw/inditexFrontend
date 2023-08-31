import { render, screen } from '@testing-library/react'
import Table from '../../../src/components/product/table/Table'
import { ProductsFixture } from '../../fixtures/products'
import { ProductsActionStub } from '../../stubs/productsAction'

vi.mock('../../../src/context/table/table.ts', () => {
  return {
    useTable: () => ({
      table: ProductsFixture.someProductsTable,
      updateTable: () => {},
      updateProductsOrder: () => {}
    })
  }
})

describe('Table', () => {
  beforeAll(() => {
    ProductsActionStub.spyRetrieveProducts([])
  })

  it('renders multiple rows of products', () => {
    SUT.render()

    expect(SUT.rows().length).toEqual(3)
  })
})

class SUT {
  static render(): void {
    render(<Table productIds={ProductsFixture.aProductId} />)
  }

  static row(): HTMLElement {
    return screen.getByRole('row')
  }

  static rows(): HTMLElement[] {
    return screen.getAllByRole('row')
  }
}
