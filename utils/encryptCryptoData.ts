import { hexToArray } from './decodeHelper'

/**
 * Encrypts the given data using the web crypto API.
 * @param data - The data to be encrypted.
 * @returns The encrypted data as a string.
 */
const encryptCryptoData = async (data: string) => {
  const jwk = JSON.parse(process.env.ENCRYPTATION_KEY ?? '{}')
  const iv = hexToArray(process.env.ENCRYPTATION_IV ?? '')
  const key = await window.crypto.subtle.importKey(
    'jwk',
    jwk,
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  )
  // Convert the data to an ArrayBuffer
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  // Encrypt the data
  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    dataBuffer
  )

  // Convert the encrypted data to a string
  const encryptedString = btoa(
    String.fromCharCode(...Array.from(new Uint8Array(encryptedData)))
  )

  return encryptedString
}

export default encryptCryptoData
