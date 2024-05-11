import { PostLoginModel } from '@models/postLogin.model'
import axios from 'axios'

const postLogin = async (data: PostLoginModel) => {
  return await axios.post(
    `${process.env.BASE_DOMAIN}/user/login?_format=json`,
    data
  )
}

export default postLogin
