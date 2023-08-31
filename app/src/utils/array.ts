export function reorderElementFromArray<T>(
  array: Array<T>,
  initialPosition: number,
  finalPosition: number
): Array<T> {
  const row = array.splice(initialPosition, 1)[0]
  array.splice(finalPosition, 0, row)

  return array
}
