import { Endpoint } from "../../src/utils/endpoint"
import { HttpFixture } from "../fixtures/http"

describe('Endpoint', () => {
  it('returns the encoded url', () => {
    const expectedUrl: string = HttpFixture.encodedUrl()
    const endpoint: Endpoint = new Endpoint(HttpFixture.genericUrl)

    const finalUrl = endpoint.toUrl()
    
    expect(finalUrl).toEqual(expectedUrl)
  })

  it('adds query params to encoded url', () => {
    const queryParams: Record<string, string> = HttpFixture.someQueryParams
    const endpoint: Endpoint = new Endpoint(HttpFixture.genericUrl)
    const expectedUrl: string = HttpFixture.encodedUrlWithQueryParams()

    endpoint.setQuery(queryParams)
    const finalUrl = endpoint.toUrl()

    expect(finalUrl).toEqual(expectedUrl)
  })
})