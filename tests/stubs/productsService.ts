import { ProductsService } from "../../src/services/products";
import { ProductsFixture } from "../fixtures/products";

export class ProductsServiceStub {
  static spyRetrieveProducts(): void {
    vi.spyOn(ProductsService, 'retrieveProducts').mockResolvedValue(ProductsFixture.someProducts)
  }
}