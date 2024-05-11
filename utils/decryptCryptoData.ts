import { hexToArray } from './decodeHelper'
/**
 * Decrypts a data using the web crypto API.
 * @param data - The data to be decrypted.
 * @returns The decrypted data as an object.
 */
const decryptCryptoData = async (data: any) => {
  const jwk = JSON.parse(process.env.ENCRYPTATION_KEY ?? '{}')
  const iv = hexToArray(process.env.ENCRYPTATION_IV ?? '')
  try {
    // Import the key
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

    // Convert the encrypted data to an ArrayBuffer
    const dataString = atob(data)
    const dataBuffer = new Uint8Array(dataString.length)
    for (let i = 0; i < dataString.length; i++) {
      dataBuffer[i] = dataString.charCodeAt(i)
    }

    // Decrypt the data
    const decryptedData = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      dataBuffer
    )

    // Convert the decrypted data back to a string
    return new TextDecoder().decode(decryptedData)
  } catch (error) {
    console.error('Error during decryption:', error)
  }
  return
}

export default decryptCryptoData
