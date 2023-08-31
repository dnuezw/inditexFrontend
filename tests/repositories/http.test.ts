import { Mock } from 'vitest'
import { HttpRepository } from '../../src/repositories/http'
import { HttpFixture } from '../fixtures/http'

global.fetch = vi.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(HttpFixture.genericResponse)
  })
) as Mock

describe('HttpRepository', () => {
  it('can send a get request to an url', async () => {
    const expectedHeader = HttpFixture.getHeader
    const expectedUrl: string = HttpFixture.encodedUrl()

    await HttpRepository.get(HttpFixture.genericUrl)

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedHeader)
  })

  it('can send a get request to an url with query params', async () => {
    const expectedHeader = HttpFixture.getHeader
    const expectedUrl: string = HttpFixture.encodedUrlWithQueryParams()

    await HttpRepository.get(HttpFixture.genericUrl, HttpFixture.someQueryParams)

    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedHeader)
  })

  it('get requests returns a JSON object', async () => {
    const expectedResponse = HttpFixture.genericResponse

    const response = await HttpRepository.get(HttpFixture.genericUrl)

    expect(response).toEqual(expectedResponse)
  })
})
