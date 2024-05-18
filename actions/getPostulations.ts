import axios from 'axios'

const getPostulations = (uid: string, token: string, role: string) => {
  return axios
    .post(`/api/postulations`, {
      uid,
      token,
      role,
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getPostulations
