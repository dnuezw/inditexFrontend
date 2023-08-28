import { render, screen } from "@testing-library/react"
import ProductRow from "../../src/components/row/ProductRow"
import { Product } from "../../src/types/product"
import { ProductsBuilder } from "../fixtures/builders/products"
import Settings from "../../src/infraestructure/settings"

describe('ProductRow', () => {
  it('renders one card', () => {
    const aProduct: Product = new ProductsBuilder().build()
    SUT.render([aProduct])

    expect(SUT.card()).toBeInTheDocument()
  })

  it('doesnt render anything if there are less than minimum products', () => {
    SUT.render([])

    expect(SUT.card()).not.toBeInTheDocument()
  })

  it('renders three products', () => {
    const aProduct: Product = new ProductsBuilder().build()
    const anotherProduct: Product = new ProductsBuilder().with().img('another img').and().name('another name').and().price(2).build()
    const otherProduct: Product = new ProductsBuilder().with().img('other img').and().name('other name').and().price(3).build()
    SUT.render([aProduct, anotherProduct, otherProduct])

    expect(SUT.cards().length).toEqual(Settings.rowMaxProducts())
  })

  it('doesnt render anything if there are more than maximum products', () => {
    const aProduct: Product = new ProductsBuilder().build()
    const anotherProduct: Product = new ProductsBuilder().with().img('another img').and().name('another name').and().price(2).build()
    const otherProduct: Product = new ProductsBuilder().with().img('other img').and().name('other name').and().price(3).build()
    const alternativeProduct: Product = new ProductsBuilder().with().img('alternative img').and().name('alternative name').and().price(4).build()
    SUT.render([aProduct, anotherProduct, otherProduct, alternativeProduct])

    expect(SUT.cards().length).toEqual(0)
  })
})

class SUT {
  static render(products: Product[]): void {
    render(<ProductRow products={products}/>)
  }

  static card(): HTMLElement | null {
    return screen.queryByRole('listitem')
  }

  static cards(): HTMLElement[] {
    return screen.queryAllByRole('listitem')
  }
}