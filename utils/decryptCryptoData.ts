import { hexToArray } from './decodeHelper'
/**
 * Decrypts a data using the web crypto API.
 * @param data - The data to be decrypted.
 * @returns The decrypted data as an object.
 */
const decryptCryptoData = async (data: any) => {
  const jwk = JSON.parse(process.env.ENCRYPTATION_KEY ?? '{}')
  const iv = hexToArray(process.env.ENCRYPTATION_IV ?? '')
  let decryptedString = data
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
    decryptedString = new TextDecoder().decode(decryptedData)
    return decryptedString
  } catch (error) {
    console.error('Error during decryption:', error)
    return decryptedString
  }
}

export default decryptCryptoData
