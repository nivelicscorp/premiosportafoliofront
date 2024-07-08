import { Empleador, Estudio } from './postFormPerson.model'

export interface PostFormAgency {
  webform_id: string
  archivos: string[]
  categoria: string[]
  celular: string
  ciudad: string
  cobertura_alcance_proyecto: string
  cual_es_el_nombre_del_proyecto: string
  correo_contacto_agencia: string
  departamento: string
  descripcion: string
  de_que_trata_el_proyecto: string
  indicadores_de_gestion: string
  nombre_completo: string
  nombre_participante: string
  nombre_representante_agencia: string
  numero_: string
  por_que_proyecto_premiado: string
  tiempo_desarrollado_proyecto: string
  tipo_de_documento: string
  status: string
  activos: string
  activos_2022: string
  activos_2023: string
  exportaciones: string
  exportaciones_2022: string
  exportaciones_2023: string
  importaciones: string
  importaciones_2022: string
  importaciones_2023: string
  pasivos: string
  pasivos_2022: string
  pasivos_2023: string
  patrimonio: string
  patrimonio_2022: string
  patrimonio_2023: string
  utilidades: string
  utilidades_2022: string
  utilidades_2023: string
  ventas: string
  ventas_2022: string
  ventas_2023: string
  empleador: Empleador[]
  estudio: Estudio[]
  complete_page: string
}
