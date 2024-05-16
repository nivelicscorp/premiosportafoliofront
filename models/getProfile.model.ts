export interface GetProfileModel {
  uid: Uid[]
  uuid: FieldNumeroDeIdentificacion[]
  langcode: FieldNumeroDeIdentificacion[]
  preferred_langcode: FieldNumeroDeIdentificacion[]
  preferred_admin_langcode: any[]
  name: FieldNumeroDeIdentificacion[]
  mail: FieldNumeroDeIdentificacion[]
  timezone: FieldNumeroDeIdentificacion[]
  status: DefaultLangcode[]
  created: Access[]
  changed: Access[]
  access: Access[]
  login: Access[]
  init: any[]
  roles: any[]
  default_langcode: DefaultLangcode[]
  ldap_user_puid_sid: any[]
  ldap_user_puid: any[]
  ldap_user_puid_property: any[]
  ldap_user_current_dn: any[]
  ldap_user_prov_entries: any[]
  ldap_user_last_checked: any[]
  ldap_user_ldap_exclude: any[]
  field_nombre: any[]
  field_numero_de_identificacion: FieldNumeroDeIdentificacion[]
  field_numero_de_telefono: any[]
  field_tipo_de_usuario: any[]
  user_picture: any[]
}

export interface Access {
  value: Date
  format: string
}

export interface DefaultLangcode {
  value: boolean
}

export interface FieldNumeroDeIdentificacion {
  value: string
}

export interface Uid {
  value: number
}
