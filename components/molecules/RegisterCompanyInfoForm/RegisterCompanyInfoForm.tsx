import Input from '@atoms/Input/Input'
import { DescripcionDelProyecto } from '@models/getCompanyForm.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const RegisterCompanyInfoForm = ({
  data,
  errors,
  formDirective,
}: FormProps) => {
  return (
    <div
      style={{
        width: '500px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h3>{data?.postulacion_empresa_directa?.['#title']}</h3>
      <Input
        type='text'
        label={
          data?.postulacion_empresa_directa?.nombre_completo?.['#title'] ?? ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.nombre_completo?.['#title']}...`}
        hasError={errors?.nameCompany ? true : false}
        {...formDirective('nameCompany', {
          required:
            data?.postulacion_empresa_directa?.nombre_completo?.['#required'],
        })}
      />
      <div
        style={{
          display: 'flex',
          gap: '5px',
          justifyContent: 'space-between',
        }}
      >
        <Input
          type='text'
          label={data?.postulacion_empresa_directa?.nit?.['#title'] ?? ''}
          placeholder={`${data?.postulacion_empresa_directa?.nit?.['#title']}...`}
          hasError={errors?.NitCompany ? true : false}
          {...formDirective('NitCompany', {
            required: data?.postulacion_empresa_directa?.nit?.['#required'],
          })}
        />
        <Input
          type='text'
          label={
            data?.postulacion_empresa_directa?.numero_de_documento?.[
              '#title'
            ] ?? ''
          }
          placeholder={`${data?.postulacion_empresa_directa?.numero_de_documento?.['#title']}...`}
          hasError={errors?.documentIdCompany ? true : false}
          {...formDirective('documentIdCompany', {
            required:
              data?.postulacion_empresa_directa?.numero_de_documento?.[
                '#required'
              ],
          })}
        />
      </div>
      <Input
        type='text'
        label={
          data?.postulacion_empresa_directa?.departamento_de_residencia?.[
            '#title'
          ] ?? ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.departamento_de_residencia?.['#title']}...`}
        hasError={errors?.departmentCompany ? true : false}
        {...formDirective('departmentCompany', {
          required:
            data?.postulacion_empresa_directa?.departamento_de_residencia?.[
              '#required'
            ],
        })}
      />
      <Input
        type='text'
        label={
          data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#title'] ??
          ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#title']}...`}
        hasError={errors?.cityCompany ? true : false}
        {...formDirective('cityCompany', {
          required:
            data?.postulacion_empresa_directa?.ciudad_de_residencia?.[
              '#required'
            ],
        })}
      />
      <Input
        type='text'
        label={data?.postulacion_empresa_directa?.direccion?.['#title'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.direccion?.['#title']}...`}
        hasError={errors?.directionCompany ? true : false}
        {...formDirective('directionCompany', {
          required: data?.postulacion_empresa_directa?.direccion?.['#required'],
        })}
      />
      <Input
        type='text'
        label={
          data?.postulacion_empresa_directa?.quien_contactar?.['#title'] ?? ''
        }
        placeholder={`${data?.postulacion_empresa_directa?.quien_contactar?.['#title']}...`}
        hasError={errors?.whoContactCompany ? true : false}
        {...formDirective('whoContactCompany', {
          required:
            data?.postulacion_empresa_directa?.quien_contactar?.['#required'],
        })}
      />
      <Input
        type='text'
        label={data?.postulacion_empresa_directa?.cargo?.['#title'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.cargo?.['#title']}...`}
        hasError={errors?.laborCompany ? true : false}
        {...formDirective('laborCompany', {
          required: data?.postulacion_empresa_directa?.cargo?.['#required'],
        })}
      />
      <Input
        type='text'
        label={data?.postulacion_empresa_directa?.correo?.['#title'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.correo?.['#title']}...`}
        hasError={errors?.corporateEmailCompany ? true : false}
        {...formDirective('corporateEmailCompany', {
          required: data?.postulacion_empresa_directa?.correo?.['#required'],
        })}
      />
      <Input
        type='text'
        label={data?.postulacion_empresa_directa?.celular?.['#title'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.celular?.['#title']}...`}
        hasError={errors?.celphoneCompany ? true : false}
        {...formDirective('celphoneCompany', {
          required: data?.postulacion_empresa_directa?.celular?.['#required'],
        })}
      />
      <Input
        type='text'
        label={data?.postulacion_empresa_directa?.telefono?.['#title'] ?? ''}
        smallLabel='(Opcional)'
        placeholder={`${data?.postulacion_empresa_directa?.telefono?.['#title']}...`}
        hasError={errors?.phoneCompany ? true : false}
        {...formDirective('phoneCompany', {
          required: data?.postulacion_empresa_directa?.telefono?.['#required'],
        })}
      />
    </div>
  )
}

export default RegisterCompanyInfoForm
