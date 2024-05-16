import axios from 'axios'

const getProfile = async (uid: string, token: string) => {
  return axios
    .post(`/api/profile`, {
      uid,
      token,
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err
    })
}

export default getProfile
