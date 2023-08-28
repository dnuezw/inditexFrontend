import Settings from '../infraestructure/settings'
import { ProductsService } from '../services/products'
import { Product, ProductsRow } from '../types/product'

export class ProductsActions {
  static async retrieveProducts(ids: string): Promise<ProductsRow[]> {
    const products = (await ProductsService.retrieveProducts(ids)) as Product[]

    const rows = this.convertToRow(products)
    return rows
  }

  private static convertToRow(products: Product[]): ProductsRow[] {
    const rows: ProductsRow[] = []
    const numberOfProducts: number = Settings.rowMaxProducts()
    for (let i = 0; i < products.length; i += numberOfProducts) {
      const row = products.slice(i, i + numberOfProducts)
      rows.push(row)
    }

    return rows
  }
}
