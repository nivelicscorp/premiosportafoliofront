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
  '#webform_plugin_id': Type
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
  '#webform_plugin_id': Type
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
  '#webform_plugin_id': Type
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
  '#webform_plugin_id': Type
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
  '#webform_plugin_id': Type
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
  '#webform_plugin_id': Type
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

export interface Options {
  empresa_esfuerzo_exportador: string
  empresa_innovacion: string
  empresa_transformacion_digital: string
  empresa_gestion_del_recurso_humano: string
  empresa_proteccion_al_medio_ambiente: string
  empresa_aporte_a_la_comunidad: string
  empresa_responsabilidad_social_empresarial: string
  empresa_servicio_al_cliente: string
  persona_mejor_docente: string
  persona_mejor_estudiante: string
  persona_mejor_lider_empresarial: string
}
