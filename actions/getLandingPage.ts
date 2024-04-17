import axios from 'axios'
import getComponentByUuid from './getComponentByUuid'
import { PageData } from '../models/landingPage.model'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

type LandingPage = {
  components_type: string[]
  components_uuid: string[]
}

/**
 * Action to get the landing page data
 * @returns the landing page data
 */
const getLandingPage = async () => {
  const landingPage: LandingPage = await axios
    .get(URL, {
      params: {
        index: ELASTIC_DATA.INDEX,
        body: {
          query: {
            bool: {
              must: [
                { match: { url: '/premios-2024' } },
                { match: { content_type: 'landing_page' } },
              ],
            },
          },
        },
      },
    })
    .then(({ data }) => {
      return data?.hits?.hits[0]._source ?? {}
    })
    .catch((error) => {
      return []
    })
  // Declare the final object to be rewritten
  const pageData: PageData[] = []

  // Transforms all uuid into promises to get the data from components
  const componentsData: Promise<any>[] = landingPage?.components_uuid?.map(
    (component: string) => {
      return getComponentByUuid(component)
    }
  )
  // Make all requests and assign the data to the final object
  if (componentsData) {
    await Promise.all(componentsData).then((values) => {
      values?.forEach((value, index) => {
        pageData.push({
          type: landingPage?.components_type[index],
          data: value,
        })
      })
    })
  }
  return pageData
}

export default getLandingPage
