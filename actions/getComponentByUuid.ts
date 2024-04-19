import axios from 'axios'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

/**
 * Action to get components to elastic using an uuid
 * @param uuid - uuid of the component
 * @returns the component data
 */
const getComponentByUuid = async (uuid: string[]) => {
  return await axios
    .get(URL, {
      params: {
        index: ELASTIC_DATA.INDEX,
        body: {
          query: {
            terms: { component_uuid: uuid },
          },
        },
      },
    })
    .then(({ data }) => {
      return data?.hits?.hits.map((hit: any) => hit._source) ?? []
    })
    .catch((error) => {
      return {}
    })
}

export default getComponentByUuid
