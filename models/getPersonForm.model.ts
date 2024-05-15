export interface GetPersonForm {
  tipo_de_inscripcion: DescripcionDelProyecto
  ingreso_de_datos: DescripcionDelProyecto
  descripcion_del_proyecto: DescripcionDelProyecto
  documentacion_adjunta: DescripcionDelProyecto
}

export interface PostulacionPersonaDirecta {
  '#type': string
  '#title': string
  nombre_completo: DescripcionDelProyecto
  tipo_de_documento: DescripcionDelProyecto
  numero_de_documento: DescripcionDelProyecto
  fecha: DescripcionDelProyecto
  idiomas: DescripcionDelProyecto
  pais_de_nacimiento: DescripcionDelProyecto
  departamento: DescripcionDelProyecto
  ciudad: DescripcionDelProyecto
  universidad: DescripcionDelProyecto
  correo: DescripcionDelProyecto
  celular: DescripcionDelProyecto
  telefono: DescripcionDelProyecto
  '#webform': Webform
  '#webform_id': string
  '#webform_key': string
  '#webform_parent_key': string
  '#webform_parent_flexbox': boolean
  '#webform_depth': number
  '#webform_children': any[]
  '#webform_multiple': boolean
  '#webform_composite': boolean
  '#webform_parents': string[]
  '#admin_title': string
  '#webform_plugin_id': string
}

export interface DescripcionlProyectoParticipa {
  '#type': string
  '#title': string
  de_que_trata_el_proyecto: DescripcionDelProyecto
  cobertura_alcance_proyecto: DescripcionDelProyecto
  tiempo_desarrollado_proyecto: DescripcionDelProyecto
  indicadores_de_gestion: DescripcionDelProyecto
  merece_participar_premios_portafolio: DescripcionDelProyecto
  por_que_proyecto_premiado: DescripcionDelProyecto
  '#webform': Webform
  '#webform_id': string
  '#webform_key': string
  '#webform_parent_key': string
  '#webform_parent_flexbox': boolean
  '#webform_depth': number
  '#webform_children': any[]
  '#webform_multiple': boolean
  '#webform_composite': boolean
  '#webform_parents': string[]
  '#admin_title': string
  '#webform_plugin_id': string
}

export interface DescripcionDelProyecto {
  '#type': string
  '#title': null | string
  '#prev_button_label'?: string
  '#next_button_label'?: string
  descripcion_de_producto_servicio?: DescripcionDelProyecto
  descripcionl_proyecto_participa?: DescripcionlProyectoParticipa
  '#webform': Webform
  '#webform_id': string
  '#webform_key': string
  '#webform_parent_key': string
  '#webform_parent_flexbox': boolean
  '#webform_depth': number
  '#webform_children': any[]
  '#webform_multiple': boolean
  '#webform_composite': boolean
  '#webform_parents': string[]
  '#admin_title': null | string
  '#webform_plugin_id': string
  '#required'?: boolean
  archivos?: DescripcionDelProyecto
  rut?: DescripcionDelProyecto
  camara_de_comercio?: DescripcionDelProyecto
  reconocimientos?: DescripcionDelProyecto
  postulacion_persona_directa?: PostulacionPersonaDirecta
  formacion_academica?: DescripcionDelProyecto
  experiencia_laboral?: DescripcionDelProyecto
  empleador?: DescripcionDelProyecto
  '#element'?: Element
  '#webform_composite_elements'?: WebformCompositeElements
  estudio?: DescripcionDelProyecto
  '#date_date_format'?: string
  '#multiple'?: boolean
  '#options'?: { [key: string]: string }
  '#sort_options'?: boolean
  markup?: DescripcionDelProyecto
  categoria?: DescripcionDelProyecto
  '#markup'?: string
}

export enum Webform {
  Postulaciones = 'postulaciones',
}

export interface Element {
  empleador?: ElementAnio
  cargo?: ElementAnio
  anio: ElementAnio
  telefono?: ElementAnio
  otras_actividades?: Otr
  estudio?: ElementAnio
  institucion?: ElementAnio
  otros?: Otr
}

export interface ElementAnio {
  '#type': string
  '#options'?: string
  '#required': boolean
  '#title': string
}

export interface Otr {
  '#type': string
  '#title': string
}

export interface WebformCompositeElements {
  empleador?: OtrasActividadesClass
  cargo?: OtrasActividadesClass
  anio: OtrasActividadesClass
  telefono?: OtrasActividadesClass
  otras_actividades?: OtrasActividadesClass
  estudio?: OtrasActividadesClass
  institucion?: OtrasActividadesClass
  otros?: OtrasActividadesClass
}

export interface OtrasActividadesClass {
  '#type': string
  '#options'?: { [key: string]: string }
  '#required'?: boolean
  '#title': string
  '#admin_title': string
  '#webform_composite_id': string
  '#webform_composite_key': string
  '#webform_composite_parent_key': string
}
