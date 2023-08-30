import { render, screen } from "@testing-library/react"
import Table from "../../../src/components/product/table/Table"
import { ProductsRow } from "../../../src/types/product"
import { ProductsFixture } from "../../fixtures/products"

describe('Table', () => {
  it('renders a row of products', () => {
    SUT.render(ProductsFixture.oneProductTable)

    expect(SUT.row()).toBeInTheDocument()
  })

  it('renders multiple rows of products', () => {
    SUT.render(ProductsFixture.someProductsTable)

    expect(SUT.rows().length).toEqual(3)
  })
})

class SUT {
  static render(products: ProductsRow[]): void {
    render(<Table productsTable={products} onUpdateProductsOrder={()=>{}}/>)
  }

  static row(): HTMLElement {
    return screen.getByRole('row')
  }

  static rows(): HTMLElement[] {
    return screen.getAllByRole('row')
  }
}