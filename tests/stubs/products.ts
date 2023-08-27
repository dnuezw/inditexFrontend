import { ProductsService } from "../../src/services/products";
import { ProductsFixture } from "../fixtures/products";

export class ProductsStub {
  static spyRetrieveProducts() {
    vi.spyOn(ProductsService, 'retrieveProducts').mockResolvedValue(ProductsFixture.someProducts)
  }
}