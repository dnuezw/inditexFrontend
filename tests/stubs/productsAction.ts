import { SpyInstance } from "vitest";
import { ProductsActions } from "../../src/actions/products";
import { Product } from "../../src/types/product";

export class ProductsActionStub {
  static spyRetrieveProducts(products: Product[]): SpyInstance {
    return vi.spyOn(ProductsActions, 'retrieveProducts').mockResolvedValue(products)
  }
}