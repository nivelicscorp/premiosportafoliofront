const { Client } = require('@elastic/elasticsearch')
// configurar luego en ecosystem
const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const NODE = ELASTIC_DATA.NODE
const INDEX = ELASTIC_DATA.INDEX
const USERNAME = ELASTIC_DATA.ELASTIC_USERNAME
const PASSWORD = ELASTIC_DATA.ELASTIC_PASSWORD

const client = new Client({
  node: NODE,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
})

const getStructuredPage = async (req: any, res: any) => {
  const { body } = req.query
  await client
    .search({
      index: INDEX,
      body: JSON.parse(body),
    })
    .then((response: any) => {
      return res.json(response)
    })
    .catch((err: any) => {
      return res.status(500).json({ message: `Error: ${err}` })
    })
}

export default getStructuredPage
