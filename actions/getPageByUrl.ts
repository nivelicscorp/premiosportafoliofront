import axios from 'axios'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

/**
 * Get the page by URL
 * @param urlEntry the URL entry
 * @param contentType the content type
 * @returns the page data
 */
const getPageByUrl = async (urlEntry: string, contentType: string) => {
  return await axios
    .get(URL, {
      params: {
        index: ELASTIC_DATA.INDEX,
        body: {
          query: {
            bool: {
              must: [
                { match: { url: urlEntry } },
                { match: { content_type: contentType } },
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
}

export default getPageByUrl
