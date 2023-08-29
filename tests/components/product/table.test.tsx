import { render, screen } from "@testing-library/react"
import Table from "../../../src/components/product/table/Table"
import { ProductsRow } from "../../../src/types/product"
import { ProductsFixture } from "../../fixtures/products"

describe('Table', () => {
  it('renders a row of products', () => {
    SUT.render(ProductsFixture.oneProductRow)

    expect(SUT.row()).toBeInTheDocument()
  })

  it('renders multiple rows of products', () => {
    SUT.render(ProductsFixture.someProductRows)

    expect(SUT.rows().length).toEqual(3)
  })
})

class SUT {
  static render(products: ProductsRow[]): void {
    render(<Table productsRows={products}/>)
  }

  static row(): HTMLElement {
    return screen.getByRole('list')
  }

  static rows(): HTMLElement[] {
    return screen.getAllByRole('list')
  }
}