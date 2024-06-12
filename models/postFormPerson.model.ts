export interface PostFormPerson {
  webform_id: string
  archivos: string[]
  categoria: string[]
  celular: string
  ciudad_de_residencia: string
  correo: string
  departamento_de_nacimiento: string
  departamento_de_residencia: string
  descripcion_del_perfil: string
  empleador: Empleador[]
  empresa_universidad: string
  estudio: Estudio[]
  fecha: Date
  indicadores_de_su_gestion: string
  info_empresa_universidad: string
  impacto_en_su_gestion: string
  merece_participar_premios_portafolio: string
  nombre_completo: string
  numero_de_documento: string
  otros_investigaciones_publicaciones: string
  pais_de_nacimiento: string
  razon_para_ganar: string
  telefono: string
  tiempo_en_la_compania_universidad: string
  tipo_de_documento: string
  universidad: string
  status: string
  complete_page: string
}

export interface Empleador {
  anio: string
  cargo: string
  empleador: string
  otras_actividades: string
  telefono: string
}

export interface Estudio {
  anio: string
  estudio: string
  institucion: string
  otros: string
}
