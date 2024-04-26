import getComponentByUuid from './getComponentByUuid'
import arrayDestructuring from '@utils/arrayDestructuring'
import getPageByUrl from './getPageByUrl'
import { FloatButtonModel } from '@models/floatButton.model'

const ELASTIC_DATA = JSON.parse(process.env.ELASTIC_DATA || '')
const URL = `${ELASTIC_DATA.DOMAIN}${process.env.ELASTIC_API}`

type LandingPage = {
  components_type: string[]
  boton_flotante_url: string
  boton_flotante_texto: string
  activar_postulaciones: boolean
  components_uuid: string[]
}

/**
 * Action to get the landing page data
 * @returns the landing page data
 */
const getLandingPage = async () => {
  /**
   * Get the landing page data
   */
  const landingPage: LandingPage = await getPageByUrl(
    '/premios-2024',
    'landing_page'
  )
  console.log('🚀 ~ getLandingPage ~ landingPage:', landingPage)

  /**
   * Get the sections data
   */
  const componentsData = await getComponentByUuid(landingPage?.components_uuid)
  /**
   * Search in blocks if needs more data to be fetched
   */
  for (const data of componentsData) {
    if (
      arrayDestructuring(data?.component_type, '') ===
      'bloque_mas_de_portafolio'
    ) {
      const articles = await getComponentByUuid(data?.items_contenido_uuid)
      data.items_contenido_uuid = articles
    }
  }
  const floatButton: FloatButtonModel = {
    url: arrayDestructuring(landingPage?.boton_flotante_url, '').replace(
      'internal:',
      ''
    ),
    text: arrayDestructuring(landingPage?.boton_flotante_texto, ''),
    active: arrayDestructuring(landingPage?.activar_postulaciones, false),
  }
  return [componentsData, floatButton]
}

export default getLandingPage
