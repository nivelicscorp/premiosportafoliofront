import axios from 'axios'
import getComponentByUuid from './getComponentByUuid'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

/**
 * Action to get the landing page data
 * @returns the landing page data
 */
const getLandingPage = async () => {
  const landingPage: string[] = await axios
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
      return data?.hits?.hits[0]._source?.components_uuid ?? {}
    })
    .catch((error) => {
      return []
    })
  // Declare the final object to be rewritten
  const pageData = {
    banner: undefined,
    categories: undefined,
  }
  // Transforms all uuid into promises to get the data from components
  const componentsData: Promise<any>[] = landingPage.map(
    (component: string) => {
      return getComponentByUuid(component)
    }
  )
  // Make all requests and assign the data to the final object
  await Promise.all(componentsData).then((values) => {
    pageData.banner = values[0]
    pageData.categories = values[1]
  })
  return pageData
}

export default getLandingPage
