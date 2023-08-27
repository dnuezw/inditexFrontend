import { JSONRecord } from "../types/http"

export class HttpRepository {
  static async get(url: string): Promise<JSONRecord> {
    const res: Response = await fetch(url, {method: 'GET'})
    return await res.json() as JSONRecord
  }
}