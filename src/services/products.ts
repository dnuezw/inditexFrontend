import Settings from '../infraestructure/settings'
import { HttpRepository } from '../repositories/http'
import { JSONRecord } from '../types/http'
import { cleanNonSet } from '../utils/record'

export class ProductsService {
  static async retrieveProducts(ids: string): Promise<JSONRecord[]> {
    const endpoint = Settings.baseUrl() + '/products'
    const queryParams: Record<string, string> = {
      ids
    }

    const response = await HttpRepository.get(endpoint, cleanNonSet(queryParams))

    return response.products as JSONRecord[]
  }
}
