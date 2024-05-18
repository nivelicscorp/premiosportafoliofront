import axios from 'axios'

const putProfile = async (
  uid: string,
  token: string,
  name: string,
  celphone?: string
) => {
  try {
    const response = await axios.patch('/api/profile', {
      uid,
      token,
      name,
      celphone,
    })
    return response.data
  } catch (error) {
    return error
  }
}

export default putProfile
