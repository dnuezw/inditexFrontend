import { reorderElementFromArray } from "../../src/utils/array"

describe('Array', () => {
  it('reorders the given elements of an array', () => {
    const array: string [] = ['firstElement', 'secondElement', 'thirdElement']
    const firstElementPosition: number = 0
    const secondElementPosition: number = 2

    const reorderedArray = reorderElementFromArray(array, firstElementPosition, secondElementPosition)    

    expect(reorderedArray).toEqual(['secondElement', 'thirdElement', 'firstElement'])
  })
})