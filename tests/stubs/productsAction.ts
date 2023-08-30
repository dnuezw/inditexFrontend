import { SpyInstance } from "vitest";
import { ProductsActions } from "../../src/actions/products";
import { ProductsTable } from "../../src/types/product";

export class ProductsActionStub {
  static spyRetrieveProducts(productsTable: ProductsTable): SpyInstance {
    return vi.spyOn(ProductsActions, 'retrieveProducts').mockResolvedValue(productsTable)
  }
}