import { HttpRepository } from "../repositories/http";
import { JSONRecord } from "../types/http";

export class ProductsService {
  private static baseUrl: string = 'http://localhost:1090'

  static async retrieveProducts(): Promise<JSONRecord[]> {
    const endpoint = this.baseUrl + '/products'
    
    const response = await HttpRepository.get(endpoint)

    return response.products as JSONRecord[]
  }
}