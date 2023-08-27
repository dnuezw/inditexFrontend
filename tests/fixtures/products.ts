import { JSONRecord } from "../../src/types/http";
import { Product } from "../../src/types/product";

export class ProductsFixture {
  static aProduct: Product = {
    img: 'an image',
    name: 'a name',
    price: 1
  }

  static someProducts: JSONRecord[] = [this.aProduct]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }
}