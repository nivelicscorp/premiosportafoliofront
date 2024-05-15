import { PostFormAgency } from '@models/postFormAgency.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { PostFormPerson } from '@models/postFormPerson.model'
import axios from 'axios'

const postFormPostulation = async (
  data: PostFormPerson | PostFormCompany | PostFormAgency
) => {
  return await axios.post(
    `${process.env.BASE_DOMAIN}/webform_rest/submit?_format=json`,
    data
  )
}

export default postFormPostulation
