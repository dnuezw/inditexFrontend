import { ProductsActions } from "../../src/actions/products"
import { ProductsTable } from "../../src/types/product"
import { ProductsFixture } from "../fixtures/products"
import { ProductsServiceStub } from "../stubs/productsService"

describe('ProductsActions', () => {
  it('calls retrieve products method on products service', async () => {
    const spy = ProductsServiceStub.spyRetrieveProducts()

    await ProductsActions.retrieveProducts(ProductsFixture.aProductId)

    expect(spy).toHaveBeenCalledWith(ProductsFixture.aProductId)
  })

  it('returns an array of products row', async () => {
    ProductsServiceStub.spyRetrieveProducts()
    const expectedProducts: ProductsTable = ProductsFixture.oneProductTable

    const products = await ProductsActions.retrieveProducts(ProductsFixture.aProductId)

    expect(products).toEqual(expectedProducts)
  })
})