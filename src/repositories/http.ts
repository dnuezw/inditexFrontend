import { JSONRecord } from "../types/http"
import { Endpoint } from "../utils/endpoint"

export class HttpRepository {
  static async get(url: string, queryParams?: Record<string, string>): Promise<JSONRecord> {
    const endpoint: Endpoint = new Endpoint(url)
    endpoint.setQuery(queryParams)
    
    const res: Response = await fetch(endpoint.toUrl(), {method: 'GET'})
    return await res.json() as JSONRecord
  }
}