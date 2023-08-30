import Settings from '../infraestructure/settings'
import { ProductsService } from '../services/products'
import { Product, ProductsRow, ProductsTable } from '../types/product'

export class ProductsActions {
  static async retrieveProducts(ids: string): Promise<ProductsTable> {
    const products = (await ProductsService.retrieveProducts(ids)) as Product[]

    const productsTable = this.convertToTable(products)    
    return productsTable
  }

  private static convertToTable(products: Product[]): ProductsTable {
    const result: ProductsTable = []
    let productsRow: ProductsRow

    const numberOfProducts: number = Settings.rowMaxProducts()
    for (let i = 0; i < products.length; i += numberOfProducts) {
      const row = products.slice(i, i + numberOfProducts)
      productsRow = {
        id: `${result.length + 1}`,
        products: row
      }
      result.push(productsRow)
    }

    return result
  }
}
