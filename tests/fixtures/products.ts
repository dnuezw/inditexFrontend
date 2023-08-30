import { JSONRecord } from "../../src/types/http";
import { ProductsTable } from "../../src/types/product";
import { ProductsBuilder } from "./builders/products";

export class ProductsFixture {
  static aProductId: string = '1'
  static anotherProductId: string = '2'
  static aRowId: string = '1'
  static anotherRowId: string = '2'
  static otherRowId: string = '3'

  static urlProductIds: string = `${ProductsFixture.aProductId}, ${ProductsFixture.anotherProductId}`

  static someProducts: JSONRecord[] = [new ProductsBuilder().build()]

  static aProductResponse: JSONRecord = {
    products: this.someProducts
  }

  static oneProductTable: ProductsTable = [
    {
      id: this.aRowId,
      products: [new ProductsBuilder().build()]
    }
  ]

  static someProductsTable: ProductsTable = [
    {
      id: this.aRowId,
      products: [
        new ProductsBuilder().build()
      ]
    },
    {
      id: this.anotherRowId,
      products: [new ProductsBuilder().with().img('another img').and().name('another name').and().price(2).build()]
    },
    {
      id: this.otherRowId,
      products: [new ProductsBuilder().with().img('other img').and().name('other name').and().price(3).build()]
    }
  ]
}