export const cleanNonSet = (toClean: Record<string, string>): Record<string, string> => {
  const result: Record<string, string> = {}

  Object.entries(toClean).forEach(([key, value]) => {
    if(value.trim() !== '') result[key] = value
  })

  return result
}