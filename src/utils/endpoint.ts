export class Endpoint {
  private readonly QUERY_SYMBOL: string = '?'
  private readonly QUERY_SEPARATOR: string = '&'
  private baseUrl: string
  private query: string = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  setQuery(params?: Record<string, string>): void {
    let result: string = ''
    result += this.QUERY_SYMBOL
    for (const param in params) {
      result += `${param}=${params[param]}`
      result += this.QUERY_SEPARATOR
    }
    result = result.slice(0, -1)
    this.query = result
  }

  toUrl(): string {
    return encodeURI(this.baseUrl + this.query)
  }
}
