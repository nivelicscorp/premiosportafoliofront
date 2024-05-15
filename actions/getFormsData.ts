import axios from 'axios'

// TODO: Remove this line when the certificate is valid
import https from 'https'
const agent = new https.Agent({
  rejectUnauthorized: false,
})

export const getFormsPersonData = async () => {
  return await axios
    .get(
      `${process.env.BASE_DOMAIN}/webform_rest/postulaciones/fields?_format=hal_json`,
      { httpsAgent: agent }
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
}
export const getFormsCompanyData = async () => {
  return await axios
    .get(
      `${process.env.BASE_DOMAIN}/webform_rest/postulaciones_empresas/fields?_format=hal_json`,
      { httpsAgent: agent }
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
}
export const getFormsAgencyData = async () => {
  return await axios
    .get(
      `${process.env.BASE_DOMAIN}/webform_rest/postulaciones_agencias/fields?_format=hal_json`,
      { httpsAgent: agent }
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.error(err)
    })
}
