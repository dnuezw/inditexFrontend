import { act, render, screen } from "@testing-library/react"
import Editor from "../../../src/components/product/editor/Editor"
import { ProductsFixture } from "../../fixtures/products"
import { ProductsActionStub } from "../../stubs/productsAction"

vi.mock('react-router-dom', () => ({
  useParams: () => ({
    ids: ProductsFixture.urlProductIds
  })
}))

vi.mock('/src/common/titles', () => {
  return {
    titles: {
      product: 'a product title'
    }
  }
})

describe('Editor', () => {
  it("renders article title", async () => {
    ProductsActionStub.spyRetrieveProducts([])
    await SUT.render()

    expect(SUT.articleTitle()).toBeInTheDocument()
  })

  it('calls the service with the ids from the url', async () => {
    const spy = ProductsActionStub.spyRetrieveProducts([])
    await SUT.render()

    expect(spy).toHaveBeenCalledWith(ProductsFixture.urlProductIds)
  })
})

class SUT {
  static async render(): Promise<void> {
    await act(async () => {
      render(<Editor />)
    })
  }

  static articleTitle(): HTMLElement {
    return screen.getByRole('heading', {name: 'a product title'})
  }
}