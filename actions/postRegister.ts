import { PostRegisterData } from '@models/postRegister.model'
import axios from 'axios'

const postRegister = async (data: PostRegisterData) => {
  return await axios.post(
    `${process.env.BASE_DOMAIN}/user/register?_format=json`,
    data
  )
}

export default postRegister
