export const isValidArray = (array: Array<any> | any): boolean => {
  // Check if the array is valid and has at least one element
  return Array.isArray(array) && array.length > 0
}
