export interface GetCompanyForm {
  tipo_de_inscripcion: InformacionFinanciera
  ingreso_de_datos: InformacionFinanciera
  descripcion_del_proyecto: DescripcionDelProyecto
  documentacion_adjunta: DescripcionDelProyecto
  informacion_financiera: InformacionFinanciera
}

export interface DescripcionDelProyecto {
  '#type': Type
  '#title': string
  '#prev_button_label': string
  '#next_button_label': string
  descripcion_de_producto_servicio?: InformacionFinanciera
  razones_por_las_que_se_postula?: InformacionFinanciera
  descripcionl_proyecto_participa?: DescripcionlProyectoParticipa
  markup_01?: InformacionFinanciera
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
  archivos?: InformacionFinanciera
  rut?: InformacionFinanciera
  camara_de_comercio?: InformacionFinanciera
}

export enum Type {
  Checkboxes = 'checkboxes',
  Email = 'email',
  Textarea = 'textarea',
  Textfield = 'textfield',
  WebformMarkup = 'webform_markup',
  WebformWizardPage = 'webform_wizard_page',
}

export enum Webform {
  PostulacionesEmpresas = 'postulaciones_empresas',
}

export interface PostulacionEmpresaDirecta {
  '#type': string
  '#title': string
  nombre_completo: InformacionFinanciera
  nit: InformacionFinanciera
  numero_de_documento: InformacionFinanciera
  departamento: InformacionFinanciera
  ciudad: InformacionFinanciera
  quien_contactar: InformacionFinanciera
  cargo: InformacionFinanciera
  correo: InformacionFinanciera
  celular: InformacionFinanciera
  telefono: InformacionFinanciera
  resena_historica: InformacionFinanciera
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

export interface Ano2023 {
  '#type': string
  '#title': string
  activos_2023: InformacionFinanciera
  pasivos_2023: InformacionFinanciera
  patrimonio_2023: InformacionFinanciera
  ventas_2023: InformacionFinanciera
  exportaciones_2023: InformacionFinanciera
  importaciones_2023: InformacionFinanciera
  utilidades_2023: InformacionFinanciera
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

export interface Ano2022 {
  '#type': string
  '#title': string
  activos_2022: InformacionFinanciera
  pasivos_2022: InformacionFinanciera
  patrimonio_2022: InformacionFinanciera
  ventas_2022: InformacionFinanciera
  exportaciones_2022: InformacionFinanciera
  importaciones_2022: InformacionFinanciera
  utilidades_2022: InformacionFinanciera
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

export interface Ano2021 {
  '#type': string
  '#title': string
  activos: InformacionFinanciera
  pasivos: InformacionFinanciera
  patrimonio: InformacionFinanciera
  ventas: InformacionFinanciera
  exportaciones: InformacionFinanciera
  importaciones: InformacionFinanciera
  utilidades: InformacionFinanciera
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

export interface InformacionFinanciera {
  '#type': Type
  '#title': null | string
  '#required'?: boolean
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
  '#markup'?: string
  markup_02?: InformacionFinanciera
  ano_2021?: Ano2021
  ano_2022?: Ano2022
  ano_2023?: Ano2023
  '#prev_button_label'?: string
  '#next_button_label'?: string
  postulacion_empresa_directa?: PostulacionEmpresaDirecta
  markup?: InformacionFinanciera
  categoria?: InformacionFinanciera
  '#options'?: Options
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

export interface DescripcionlProyectoParticipa {
  '#type': string
  '#title': string
  de_que_trata_el_proyecto: InformacionFinanciera
  cobertura_alcance_proyecto: InformacionFinanciera
  tiempo_desarrollado_proyecto: InformacionFinanciera
  indicadores_de_gestion: InformacionFinanciera
  por_que_proyecto_premiado: InformacionFinanciera
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
