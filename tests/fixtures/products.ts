import { JSONRecord } from "../../src/types/http";
import { ProductsBuilder } from "./builders/products";

export class ProductsFixture {
  static someProducts: JSONRecord[] = [new ProductsBuilder().build()]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }
}