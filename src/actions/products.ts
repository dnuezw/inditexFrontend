import { ProductsService } from "../services/products";
import { Product } from "../types/product";

export class ProductsActions {
  static async retrieveProducts(): Promise<Product[]> {
    const products = await ProductsService.retrieveProducts() as Product[]
    return products
  }
}