import { PostFormAgency } from '@models/postFormAgency.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { PostFormPerson } from '@models/postFormPerson.model'
import decryptCryptoData from '@utils/decryptCryptoData'
import axios from 'axios'
import { getCookie } from 'cookies-next'

const patchFormPostulation = async (
  data: PostFormPerson | PostFormCompany | PostFormAgency,
  sid: string,
  role: string
) => {
  const deciphedData = await decryptCryptoData(getCookie('user-data'))
  const csrfToken = JSON.parse(deciphedData ?? '{}')?.csrf_token
  const tokenAdded = { formData: data, token: csrfToken, sid, role }
  return await axios.patch('/api/patch-form', tokenAdded)
}

export default patchFormPostulation
