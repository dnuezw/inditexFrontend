import { SpyInstance } from 'vitest'
import { HttpRepository } from '../../src/repositories/http'
import { ProductsFixture } from '../fixtures/products'

export class HttpStub {
  static spyGet(): SpyInstance {
    return vi.spyOn(HttpRepository, 'get').mockResolvedValue(ProductsFixture.aProductResponse)
  }
}
