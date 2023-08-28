import { ProductsActions } from "../../src/actions/products"
import { ProductsRow } from "../../src/types/product"
import { ProductsBuilder } from "../fixtures/builders/products"
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
    const expectedProducts: ProductsRow[] = [[new ProductsBuilder().build()]]

    const products = await ProductsActions.retrieveProducts(ProductsFixture.aProductId)

    expect(products).toEqual(expectedProducts)
  })
})