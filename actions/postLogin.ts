import { PostLoginModel } from '@models/postLogin.model'
import axios from 'axios'

const postLogin = async (data: PostLoginModel) => {
  return await axios.post(`/api/login`, data)
}

export default postLogin
