import { JSONRecord } from "../../src/types/http";
import { Product } from "../../src/types/product";

export class ProductsFixture {
  static aProduct: Product[] = [{
    img: 'an image',
    name: 'a name',
    price: 1
  }]

  static aProductResponse: JSONRecord = {
    products: this.aProduct
  }
}