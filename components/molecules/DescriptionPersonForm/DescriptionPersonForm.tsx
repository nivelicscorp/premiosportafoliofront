import Input from '@atoms/Input/Input'
import { AmpliarInformacion } from '@models/getForms.model'
import { PostFormPerson } from '@models/postFormPerson.model'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  data: AmpliarInformacion
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  preloaded: PostFormPerson
}

const DescriptionPersonForm = ({
  data,
  errors,
  formDirective,
  preloaded,
}: FormProps) => {
  return (
    <div className='form step3'>
      <h3 className='form-subTitle'>{data?.['#title']}</h3>
      <Input
        label={data?.info_empresa_universidad?.['#title'] ?? ''}
        type={data?.info_empresa_universidad?.['#type'] ?? ''}
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.info_empresa_universidad?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonCompany ? true : false}
        {...formDirective('descriptionPersonCompany', {
          value:
            preloaded?.empresa_universidad === '-'
              ? ''
              : preloaded?.empresa_universidad,
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
          value:
            preloaded?.descripcion_del_perfil === '-'
              ? ''
              : preloaded?.descripcion_del_perfil,
          required: data?.descripcion_del_perfil?.['#required'],
        })}
      />
      <Input
        label={data?.impacto_en_su_gestion?.['#title'] ?? ''}
        type={data?.impacto_en_su_gestion?.['#type'] ?? ''}
        tooltipLabel='Antes y después, cumplimiento de objetivos, fomentar cambios positivos, participación en proyectos en la universidad o empresas, entre otros.'
        placeholder='Escriba aquí...'
        smallLabel={
          !data?.impacto_en_su_gestion?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.descriptionPersonImpact ? true : false}
        {...formDirective('descriptionPersonImpact', {
          value:
            preloaded?.impacto_en_su_gestion === '-'
              ? ''
              : preloaded?.impacto_en_su_gestion,
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
          value:
            preloaded?.tiempo_en_la_compania_universidad === '-'
              ? ''
              : preloaded?.tiempo_en_la_compania_universidad,
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
          value:
            preloaded?.indicadores_de_su_gestion === '-'
              ? ''
              : preloaded?.indicadores_de_su_gestion,
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
          value:
            preloaded?.razon_para_ganar === '-'
              ? ''
              : preloaded?.razon_para_ganar,
          required: data?.razon_para_ganar?.['#required'],
        })}
      />
      <Input
        label={data?.otros_investigaciones_publicaciones?.['#title'] ?? ''}
        type={data?.otros_investigaciones_publicaciones?.['#type'] ?? ''}
        smallLabel='(Investigaciones o publicaciones)'
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionPersonOthers ? true : false}
        {...formDirective('descriptionPersonOthers', {
          value:
            preloaded?.otros_investigaciones_publicaciones === '-'
              ? ''
              : preloaded?.otros_investigaciones_publicaciones,
          required: data?.otros_investigaciones_publicaciones?.['#required'],
        })}
      />
    </div>
  )
}

export default DescriptionPersonForm
