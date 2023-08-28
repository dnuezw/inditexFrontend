import { ProductsService } from "../../src/services/products"
import { JSONRecord } from "../../src/types/http"
import { ProductsFixture } from "../fixtures/products"
import { HttpStub } from "../stubs/http"

describe('ProductsService', () => {
  it('sends the product endpoint to the repository', async () => {
    const spy = HttpStub.spyGet()

    await ProductsService.retrieveProducts(ProductsFixture.aProductId)

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('/products'), {ids: ProductsFixture.aProductId})
  })

  it('returns an array of products as a JSONRecord array', async () => {
    HttpStub.spyGet()
    const expectedProducts: JSONRecord[] = ProductsFixture.someProducts

    const products = await ProductsService.retrieveProducts(ProductsFixture.aProductId)

    expect(products).toEqual(expectedProducts)
  })
})