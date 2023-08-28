import { act, render, screen, within } from "@testing-library/react"
import Editor from "../../src/components/editor/Editor"
import { Product } from "../../src/types/product"
import { ProductsBuilder } from "../fixtures/builders/products"
import { ProductsActionStub } from "../stubs/productsAction"

describe('Editor', () => {
  it('renders multiple products', async () => {
    const firstProduct: Product = new ProductsBuilder().build()
    const secondProduct: Product = new ProductsBuilder().with().img('another img').and().name('another name').and().price(2).build()
    ProductsActionStub.spyRetrieveProducts([firstProduct, secondProduct])
    await SUT.render()

    const cardList = screen.getByRole('list')
    expect(SUT.allProductsImagesFrom(cardList).length).toEqual(2)
    expect(SUT.allProductsNamesFrom(cardList).length).toEqual(2)
    expect(SUT.allProductsPricesFrom(cardList).length).toEqual(2)
  })
})

class SUT {
  static async render(): Promise<void> {
    await act(async () => {
      render(<Editor />)
    })
  }

  static  allProductsImagesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('img')
  }

  static  allProductsNamesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('heading')
  }

  static  allProductsPricesFrom(node: HTMLElement): HTMLElement[] {
    return within(node).getAllByRole('paragraph')
  }
}