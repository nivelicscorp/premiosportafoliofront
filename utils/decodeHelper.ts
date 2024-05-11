// Convert a Uint8Array to a hex string
export const arrayToHex = (array: any) => {
  return Array.prototype.map
    .call(array, (x) => ('00' + x.toString(16)).slice(-2))
    .join('')
}

// Convert a hex string to a Uint8Array
export const hexToArray = (hex: any) => {
  if (hex.length % 2 !== 0) {
    throw new Error('Invalid hex string')
  }
  const array = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length; i += 2) {
    array[i / 2] = parseInt(hex.substring(i, i + 2), 16)
  }
  return array
}
