import { JSONRecord } from "../../src/types/http";
import { ProductsRow } from "../../src/types/product";
import { ProductsBuilder } from "./builders/products";

export class ProductsFixture {
  static aProductId: string = '1'
  static anotherProductId: string = '2'

  static urlProductIds: string = `${ProductsFixture.aProductId}, ${ProductsFixture.anotherProductId}`

  static someProducts: JSONRecord[] = [new ProductsBuilder().build()]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }

  static oneProductRow: ProductsRow[] = [
    [new ProductsBuilder().build()]
  ]

  static someProductRows: ProductsRow[] = [
    [new ProductsBuilder().build()],
    [new ProductsBuilder().with().img('another img').and().name('another name').and().price(2).build()],
    [new ProductsBuilder().with().img('other img').and().name('other name').and().price(3).build()]
  ]
}