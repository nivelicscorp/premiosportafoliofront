import Input from '@atoms/Input/Input'
import { AmpliarInformacion } from '@models/getForms.model'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  data: AmpliarInformacion
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const DescriptionPersonForm = ({ data, errors, formDirective }: FormProps) => {
  return (
    <div className='form'>
      <h3>{data?.['#title']}</h3>
      <Input
        label={data?.info_empresa_universidad?.['#title'] ?? ''}
        type={data?.info_empresa_universidad?.['#type'] ?? ''}
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.info_empresa_universidad?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonCompany ? true : false}
        {...formDirective('descriptionPersonCompany', {
          required: data?.info_empresa_universidad?.['#required'],
        })}
      />
      <Input
        label={data?.descripcion_del_perfil?.['#title'] ?? ''}
        type={data?.descripcion_del_perfil?.['#type'] ?? ''}
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.descripcion_del_perfil?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonProfile ? true : false}
        {...formDirective('descriptionPersonProfile', {
          required: data?.descripcion_del_perfil?.['#required'],
        })}
      />
      <Input
        label={data?.impacto_en_su_gestion?.['#title'] ?? ''}
        type={data?.impacto_en_su_gestion?.['#type'] ?? ''}
        tooltipLabel='Antes y después, cumplimiento de objectivos, fomentar cambios positivos, participación en proyectos en la universidad o empresas, entre otros.'
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.impacto_en_su_gestion?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonImpact ? true : false}
        {...formDirective('descriptionPersonImpact', {
          required: data?.impacto_en_su_gestion?.['#required'],
        })}
      />
      <Input
        label={data?.tiempo_en_la_compania_universidad?.['#title'] ?? ''}
        type={data?.tiempo_en_la_compania_universidad?.['#type'] ?? ''}
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.tiempo_en_la_compania_universidad?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.descriptionPersonTime ? true : false}
        {...formDirective('descriptionPersonTime', {
          required: data?.tiempo_en_la_compania_universidad?.['#required'],
        })}
      />
      <Input
        label={data?.indicadores_de_su_gestion?.['#title'] ?? ''}
        type={data?.indicadores_de_su_gestion?.['#type'] ?? ''}
        tooltipLabel='Cifras, resultados, premios, reconocimientos, entre otros.'
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.indicadores_de_su_gestion?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonIndicators ? true : false}
        {...formDirective('descriptionPersonIndicators', {
          required: data?.indicadores_de_su_gestion?.['#required'],
        })}
      />
      <Input
        label={data?.razon_para_ganar?.['#title'] ?? ''}
        type={data?.razon_para_ganar?.['#type'] ?? ''}
        placeholder='Escriba aquí...'
        smallLabel={!data?.razon_para_ganar?.['#required'] ? '(Opcional)' : ''}
        hasError={errors?.descriptionPersonReason ? true : false}
        {...formDirective('descriptionPersonReason', {
          required: data?.razon_para_ganar?.['#required'],
        })}
      />
      <Input
        label={data?.otros_investigaciones_publicaciones?.['#title'] ?? ''}
        type={data?.otros_investigaciones_publicaciones?.['#type'] ?? ''}
        smallLabel='(Investifaciones o publicaciones)'
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionPersonOthers ? true : false}
        {...formDirective('descriptionPersonOthers', {
          required: data?.otros_investigaciones_publicaciones?.['#required'],
        })}
      />
    </div>
  )
}

export default DescriptionPersonForm
