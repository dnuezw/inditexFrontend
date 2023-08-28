import { HttpRepository } from "../repositories/http";
import { JSONRecord } from "../types/http";
import { cleanNonSet } from "../utils/record";

export class ProductsService {
  private static baseUrl: string = 'http://localhost:1090'

  static async retrieveProducts(ids: string): Promise<JSONRecord[]> {
    const endpoint = this.baseUrl + '/products'
    const queryParams: Record<string, string> = {
      ids
    }
    
    const response = await HttpRepository.get(endpoint, cleanNonSet(queryParams))

    return response.products as JSONRecord[]
  }
}