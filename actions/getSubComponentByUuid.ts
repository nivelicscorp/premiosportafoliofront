import axios from 'axios'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '{}')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

const getSubComponentByUuid = (uuid: string[]) => {
  return axios
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

export default getSubComponentByUuid
