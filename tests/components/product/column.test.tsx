import { render, screen } from "@testing-library/react"
import Column from "../../../src/components/product/column/Column"
import { ProductsBuilder } from "../../fixtures/builders/products"

describe('Column', () => {
  it('renders a product', () => {
    SUT.render()

    expect(SUT.productImage()).toBeInTheDocument()
    expect(SUT.productName()).toBeInTheDocument()
    expect(SUT.productPrice()).toBeInTheDocument()
  })
})

class SUT {
  static render(): void {
    const aProduct = new ProductsBuilder().build()
    render(
      <table>
        <tbody>
          <tr>
            <Column product={aProduct}/>
          </tr>
        </tbody>
      </table>
    )
  }

  static productImage(): HTMLElement {
    return screen.getByAltText('a name')
  }

  static productName(): HTMLElement {
    return screen.getByRole('heading', {name: 'a name'})
  }

  static productPrice(): HTMLElement {
    return screen.getByRole('paragraph')
  }
}