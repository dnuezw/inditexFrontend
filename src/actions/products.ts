import { ProductsService } from "../services/products";
import { Product } from "../types/product";

export class ProductsActions {
  static async retrieveProducts(ids: string): Promise<Product[]> {
    const products = await ProductsService.retrieveProducts(ids) as Product[]
    return products
  }
}