import { SpyInstance } from "vitest";
import { ProductsService } from "../../src/services/products";
import { ProductsFixture } from "../fixtures/products";

export class ProductsServiceStub {
  static spyRetrieveProducts(): SpyInstance {
    return vi.spyOn(ProductsService, 'retrieveProducts').mockResolvedValue(ProductsFixture.someProducts)
  }
}