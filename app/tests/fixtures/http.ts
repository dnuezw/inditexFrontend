import { JSONRecord } from '../../src/types/http'

export class HttpFixture {
  static genericUrl: string = 'an url'

  static genericResponse: JSONRecord = {
    aKey: 'a value'
  }

  static getHeader: Record<string, unknown> = {
    method: 'GET'
  }

  static someQueryParams: Record<string, string> = {
    name: 'a ñame',
    position: '#1'
  }

  static encodedUrl(): string {
    return encodeURI(HttpFixture.genericUrl)
  }

  static encodedUrlWithQueryParams(): string {
    return encodeURI(HttpFixture.genericUrl + '?name=a ñame&position=#1')
  }
}
