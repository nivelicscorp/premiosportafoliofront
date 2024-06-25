import Input from '@atoms/Input/Input'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  className: string
  preloaded: PostFormCompany
}

const RegisterCompanyInfoForm = ({
  data,
  errors,
  className,
  formDirective,
  preloaded,
}: FormProps) => {
  return (
    <form className={className + ' form form__registerCompany'}>
      <div className='title-step'>
        <h3 className='title-text'>
          {data?.postulacion_empresa_directa?.['#title']}
        </h3>
      </div>
      <Input
        label={
          data?.postulacion_empresa_directa?.nombre_completo?.['#title'] ?? ''
        }
        type={
          data?.postulacion_empresa_directa?.nombre_completo?.['#type'] ?? ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.nombre_completo?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.nombre_completo?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.nameCompany ? true : false}
        {...formDirective('nameCompany', {
          value:
            preloaded?.nombre_completo === '-'
              ? ''
              : preloaded?.nombre_completo,
          required:
            data?.postulacion_empresa_directa?.nombre_completo?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.nit?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.nit?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.nit?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.nit?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.NitCompany ? true : false}
        {...formDirective('NitCompany', {
          value: preloaded?.nit === '-' ? '' : preloaded?.nit,
          required: data?.postulacion_empresa_directa?.nit?.['#required'],
        })}
      />
      <Input
        label={
          data?.postulacion_empresa_directa?.departamento_de_residencia?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.postulacion_empresa_directa?.departamento_de_residencia?.[
            '#type'
          ] ?? ''
        }
        smallLabel={
          !data?.postulacion_empresa_directa?.departamento_de_residencia?.[
            '#required'
          ]
            ? '(Opcional)'
            : ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.departamento_de_residencia?.['#title']}...`}
        hasError={errors?.departmentCompany ? true : false}
        {...formDirective('departmentCompany', {
          value:
            preloaded?.departamento_de_residencia === '-'
              ? ''
              : preloaded?.departamento_de_residencia,
          required:
            data?.postulacion_empresa_directa?.departamento_de_residencia?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#title'] ??
          ''
        }
        type={
          data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#type'] ??
          ''
        }
        smallLabel={
          !data?.postulacion_empresa_directa?.ciudad_de_residencia?.[
            '#required'
          ]
            ? '(Opcional)'
            : ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#title']}...`}
        hasError={errors?.cityCompany ? true : false}
        {...formDirective('cityCompany', {
          value:
            preloaded?.ciudad_de_residencia === '-'
              ? ''
              : preloaded?.ciudad_de_residencia,
          required:
            data?.postulacion_empresa_directa?.ciudad_de_residencia?.[
              '#required'
            ],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.direccion?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.direccion?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.direccion?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.direccion?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.directionCompany ? true : false}
        {...formDirective('directionCompany', {
          value: preloaded?.direccion === '-' ? '' : preloaded?.direccion,
          required: data?.postulacion_empresa_directa?.direccion?.['#required'],
        })}
      />
      <Input
        label={
          data?.postulacion_empresa_directa?.quien_contactar?.['#title'] ?? ''
        }
        type={
          data?.postulacion_empresa_directa?.quien_contactar?.['#type'] ?? ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.quien_contactar?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.quien_contactar?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.whoContactCompany ? true : false}
        {...formDirective('whoContactCompany', {
          value:
            preloaded?.quien_contactar === '-'
              ? ''
              : preloaded?.quien_contactar,
          required:
            data?.postulacion_empresa_directa?.quien_contactar?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.cargo?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.cargo?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.cargo?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.cargo?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.laborCompany ? true : false}
        {...formDirective('laborCompany', {
          value: preloaded?.cargo === '-' ? '' : preloaded?.cargo,
          required: data?.postulacion_empresa_directa?.cargo?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.correo?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.correo?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.correo?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.correo?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.corporateEmailCompany ? true : false}
        {...formDirective('corporateEmailCompany', {
          value:
            preloaded?.correo === 'temporal@temporal.com'
              ? ''
              : preloaded?.correo,
          required: data?.postulacion_empresa_directa?.correo?.['#required'],
          pattern: {
            value: /^[^\s@]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/,
            message: 'Correo inválido',
          },
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.celular?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.celular?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.celular?.['#title']}...`}
        smallLabel={
          !data?.postulacion_empresa_directa?.celular?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.celphoneCompany ? true : false}
        {...formDirective('celphoneCompany', {
          value: preloaded?.celular === '-' ? '' : preloaded?.celular,
          required: data?.postulacion_empresa_directa?.celular?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.telefono?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.telefono?.['#type'] ?? ''}
        smallLabel={
          !data?.postulacion_empresa_directa?.telefono?.['#required']
            ? '(Opcional)'
            : ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.telefono?.['#title']}...`}
        hasError={errors?.phoneCompany ? true : false}
        {...formDirective('phoneCompany', {
          value: preloaded?.telefono === '-' ? '' : preloaded?.telefono,
          required: data?.postulacion_empresa_directa?.telefono?.['#required'],
        })}
      />
    </form>
  )
}

export default RegisterCompanyInfoForm
