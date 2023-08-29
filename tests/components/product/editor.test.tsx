import { act, render } from "@testing-library/react"
import Editor from "../../../src/components/product/editor/Editor"
import { ProductsFixture } from "../../fixtures/products"
import { ProductsActionStub } from "../../stubs/productsAction"

vi.mock('react-router-dom', () => ({
  useParams: () => ({
    ids: ProductsFixture.urlProductIds
  })
}))

describe('Editor', () => {
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
}