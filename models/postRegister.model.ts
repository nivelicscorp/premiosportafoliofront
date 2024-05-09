export interface PostRegisterData {
  name: FieldNombre[]
  mail: FieldNombre[]
  pass: FieldNombre[]
  field_numero_de_telefono: FieldNombre[]
  field_numero_de_identificacion: FieldNombre[]
  field_nombre: FieldNombre[]
  field_tipo_de_usuario: FieldNombre[]
}

export interface FieldNombre {
  value: string
}
