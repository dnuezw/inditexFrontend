import { JSONRecord } from "../../src/types/http";
import { ProductsBuilder } from "./builders/products";

export class ProductsFixture {
  static aProductId: string = '1'

  static someProducts: JSONRecord[] = [new ProductsBuilder().build()]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }
}