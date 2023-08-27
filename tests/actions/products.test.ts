import { ProductsActions } from "../../src/actions/products"
import { Product } from "../../src/types/product"
import { ProductsFixture } from "../fixtures/products"
import { ProductsServiceStub } from "../stubs/productsService"

describe('ProductsActions', () => {
  it('returns an array of products', async () => {
    ProductsServiceStub.spyRetrieveProducts()
    const expectedProducts: Product[] = [ProductsFixture.aProduct]

    const products = await ProductsActions.retrieveProducts()

    expect(products).toEqual(expectedProducts)
  })
})