import { JSONRecord } from "../../src/types/http";
import { ProductsBuilder } from "./builders/products";

export class ProductsFixture {
  static aProductId: string = '1'
  static anotherProductId: string = '2'

  static urlProductIds: string = `${ProductsFixture.aProductId}, ${ProductsFixture.anotherProductId}`

  static someProducts: JSONRecord[] = [new ProductsBuilder().build()]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }
}