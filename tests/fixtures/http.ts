import { JSONRecord } from "../../src/types/http"

export class HttpFixture {
  static genericUrl: string = 'an url'
  static genericResponse: JSONRecord = {
    aKey: 'a value'
  }
  static getHeader: Record<string, unknown> = {
    method: "GET"
  }
}