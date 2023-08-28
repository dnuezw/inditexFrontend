import { cleanNonSet } from "../../src/utils/record"

describe('Record', () => {
  it('cleanNonSet removes empty string values', () => {
    const toClean: Record<string, string> = {
      anEmptyProperty: '',
      aWhiteSpaceProperty: '   ',
      aValidProperty: 'a valid value'
    }
    const expected: Record<string, string> = {aValidProperty: 'a valid value'}

    const result = cleanNonSet(toClean)

    expect(result).toEqual(expected)
  })
})