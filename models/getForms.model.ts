export interface GetCompanyForm {
  tipo_de_inscripcion: DescripcionDelProyecto
  ingreso_de_datos: DescripcionDelProyecto
  descripcion_del_proyecto: DescripcionDelProyecto
  documentacion_adjunta: DescripcionDelProyecto
  informacion_financiera: DescripcionDelProyecto
}

export interface PostulacionEmpresaDirecta {
  '#type': Type
  '#title': string
  nombre_completo: DescripcionDelProyecto
  nit: DescripcionDelProyecto
  numero_de_documento: DescripcionDelProyecto
  departamento_de_residencia: DescripcionDelProyecto
  ciudad_de_residencia: DescripcionDelProyecto
  direccion: DescripcionDelProyecto
  quien_contactar: DescripcionDelProyecto
  cargo: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface DescripcionlProyectoParticipa {
  '#type': Type
  '#title': string
  nombre_del_proyecto: DescripcionDelProyecto
  de_que_trata_el_proyecto: DescripcionDelProyecto
  cobertura_alcance_proyecto: DescripcionDelProyecto
  tiempo_desarrollado_proyecto: DescripcionDelProyecto
  indicadores_de_gestion: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface Ano2023 {
  '#type': Type
  '#title': string
  activos_2023: DescripcionDelProyecto
  pasivos_2023: DescripcionDelProyecto
  patrimonio_2023: DescripcionDelProyecto
  ventas_2023: DescripcionDelProyecto
  exportaciones_2023: DescripcionDelProyecto
  importaciones_2023: DescripcionDelProyecto
  utilidades_2023: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface Ano2022 {
  '#type': Type
  '#title': string
  activos_2022: DescripcionDelProyecto
  pasivos_2022: DescripcionDelProyecto
  patrimonio_2022: DescripcionDelProyecto
  ventas_2022: DescripcionDelProyecto
  exportaciones_2022: DescripcionDelProyecto
  importaciones_2022: DescripcionDelProyecto
  utilidades_2022: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface Ano2021 {
  '#type': Type
  '#title': string
  activos: DescripcionDelProyecto
  pasivos: DescripcionDelProyecto
  patrimonio: DescripcionDelProyecto
  ventas: DescripcionDelProyecto
  exportaciones: DescripcionDelProyecto
  importaciones: DescripcionDelProyecto
  utilidades: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface DescripcionDelProyecto {
  '#type': Type
  '#title': null | string
  '#prev_button_label'?: string
  '#next_button_label'?: string
  descripcion_de_producto_servicios_de_la_empresa?: DescripcionDelProyecto
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
  '#webform_plugin_id': any
  descripcion_de_producto_servicio?: DescripcionDelProyecto
  '#required'?: boolean
  adjuntar_documentacion?: DescripcionDelProyecto
  archivos?: DescripcionDelProyecto
  '#multiple'?: boolean
  markup_02?: DescripcionDelProyecto
  ano_2021?: Ano2021
  ano_2022?: Ano2022
  ano_2023?: Ano2023
  '#markup'?: string
  postulacion_empresa_directa?: PostulacionEmpresaDirecta
  markup?: DescripcionDelProyecto
  categoria?: DescripcionDelProyecto
  '#options'?: Options
}

export enum Type {
  Checkboxes = 'checkboxes',
  Email = 'email',
  Fieldset = 'fieldset',
  Textarea = 'textarea',
  Textfield = 'textfield',
  WebformMarkup = 'webform_markup',
  WebformWizardPage = 'webform_wizard_page',
}

export enum Webform {
  PostulacionesEmpresas = 'postulaciones_empresas',
}

// export interface Options {
//   empresa_esfuerzo_exportador: string
//   empresa_innovacion: string
//   empresa_transformacion_digital: string
//   empresa_gestion_del_recurso_humano: string
//   empresa_proteccion_al_medio_ambiente: string
//   empresa_aporte_a_la_comunidad: string
//   empresa_responsabilidad_social_empresarial: string
//   empresa_servicio_al_cliente: string
//   persona_mejor_docente: string
//   persona_mejor_estudiante: string
//   persona_mejor_lider_empresarial: string
// }

export interface GetAgencyForm {
  tipo_de_inscripcion: DescripcionDelProyecto
  ingreso_de_datos: DescripcionDelProyecto
  descripcion_del_proyecto: DescripcionDelProyecto
  documentacion_adjunta: DescripcionDelProyecto
}

export interface DatosEmpresaPersonaParticipate {
  '#type': string
  '#title': string
  nombre_participante: DescripcionDelProyecto
  tipo_de_documento: DescripcionDelProyecto
  numero_: DescripcionDelProyecto
  departamento: DescripcionDelProyecto
  ciudad: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface PostulacionAgencia {
  '#type': string
  '#title': string
  nombre_completo: DescripcionDelProyecto
  nombre_representante_agencia: DescripcionDelProyecto
  correo_contacto_agencia: DescripcionDelProyecto
  celular: DescripcionDelProyecto
  datos_empresa_persona_participate: DatosEmpresaPersonaParticipate
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
  '#webform_plugin_id': any
}

export interface DescripcionlProyectoParticipa {
  '#type': Type
  '#title': string
  de_que_trata_el_proyecto: DescripcionDelProyecto
  cobertura_alcance_proyecto: DescripcionDelProyecto
  tiempo_desarrollado_proyecto: DescripcionDelProyecto
  indicadores_de_gestion: DescripcionDelProyecto
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
  '#webform_plugin_id': any
}

export interface DescripcionDelProyecto {
  '#type': Type
  '#title': null | string
  '#prev_button_label'?: string
  '#next_button_label'?: string
  descripcion?: DescripcionDelProyecto
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
  '#webform_plugin_id': any
  '#required'?: boolean
  adjuntar_documentacion?: DescripcionDelProyecto
  archivos?: DescripcionDelProyecto
  '#multiple'?: boolean
  postulacion_agencia?: PostulacionAgencia
  '#options'?: Options
  markup?: DescripcionDelProyecto
  categoria?: DescripcionDelProyecto
  '#markup'?: string
}

export enum Webform {
  PostulacionesAgencias = 'postulaciones_agencias',
}

export interface Options {
  CC?: string
  CE?: string
  NIT?: string
  Pasaporte?: string
  empresa_esfuerzo_exportador?: string
  empresa_innovacion?: string
  empresa_transformacion_digital?: string
  empresa_gestion_del_recurso_humano?: string
  empresa_proteccion_al_medio_ambiente?: string
  empresa_aporte_a_la_comunidad?: string
  empresa_responsabilidad_social_empresarial?: string
  empresa_servicio_al_cliente?: string
  persona_mejor_docente?: string
  persona_mejor_estudiante?: string
  persona_mejor_lider_empresarial?: string
}

export interface GetPersonForm {
  tipo_de_inscripcion: AdjuntarDocumentacion
  ingreso_de_datos: AdjuntarDocumentacion
  descripcion_del_proyecto: AdjuntarDocumentacion
  adjuntar_documentacion: AdjuntarDocumentacion
}

export interface PostulacionPersonaDirecta {
  '#type': string
  '#title': string
  nombre_completo: AdjuntarDocumentacion
  tipo_de_documento: AdjuntarDocumentacion
  numero_de_documento: AdjuntarDocumentacion
  pais_de_nacimiento: AdjuntarDocumentacion
  departamento_de_nacimiento: AdjuntarDocumentacion
  departamento_de_residencia: AdjuntarDocumentacion
  ciudad_de_residencia: AdjuntarDocumentacion
  empresa_universidad: AdjuntarDocumentacion
  correo: AdjuntarDocumentacion
  celular: AdjuntarDocumentacion
  segundo_contacto: AdjuntarDocumentacion
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
  '#webform_plugin_id': any
}

export interface AmpliarInformacion {
  '#type': string
  '#title': string
  info_empresa_universidad: AdjuntarDocumentacion
  descripcion_del_perfil: AdjuntarDocumentacion
  impacto_en_su_gestion: AdjuntarDocumentacion
  tiempo_en_la_compania_universidad: AdjuntarDocumentacion
  indicadores_de_su_gestion: AdjuntarDocumentacion
  razon_para_ganar: AdjuntarDocumentacion
  otros_investigaciones_publicaciones: AdjuntarDocumentacion
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
  '#webform_plugin_id': any
}

export interface AdjuntarDocumentacion {
  '#type': string
  '#title': null | string
  archivos?: AdjuntarDocumentacion
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
  '#webform_plugin_id': any
  '#multiple'?: boolean
  '#required'?: boolean
  '#prev_button_label'?: string
  '#next_button_label'?: string
  ampliar_informacion?: AmpliarInformacion
  postulacion_persona_directa?: PostulacionPersonaDirecta
  formacion_academica?: AdjuntarDocumentacion
  experiencia_laboral?: AdjuntarDocumentacion
  empleador?: AdjuntarDocumentacion
  '#element'?: Element
  '#webform_composite_elements'?: WebformCompositeElements
  estudio?: AdjuntarDocumentacion
  '#options'?: Options
  markup?: AdjuntarDocumentacion
  categoria?: AdjuntarDocumentacion
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
  '#required': boolean
  '#title': string
}

export interface Options {
  CC?: string
  CE?: string
  Pasaporte?: string
  empresa_esfuerzo_exportador?: string
  empresa_innovacion?: string
  empresa_transformacion_digital?: string
  empresa_gestion_del_recurso_humano?: string
  empresa_proteccion_al_medio_ambiente?: string
  empresa_aporte_a_la_comunidad?: string
  empresa_responsabilidad_social_empresarial?: string
  empresa_servicio_al_cliente?: string
  persona_mejor_docente?: string
  persona_mejor_estudiante?: string
  persona_mejor_lider_empresarial?: string
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
