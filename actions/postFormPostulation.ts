import { PostFormAgency } from '@models/postFormAgency.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { PostFormPerson } from '@models/postFormPerson.model'
import decryptCryptoData from '@utils/decryptCryptoData'
import axios from 'axios'
import { getCookie } from 'cookies-next'

const postFormPostulation = async (
  data: PostFormPerson | PostFormCompany | PostFormAgency
) => {
  const deciphedData = await decryptCryptoData(getCookie('user-data'))
  const csrfToken = JSON.parse(deciphedData ?? '{}')?.csrf_token
  const tokenAdded = { ...data, token: csrfToken }
  return await axios.post('/api/post-form', tokenAdded)
}

export default postFormPostulation
