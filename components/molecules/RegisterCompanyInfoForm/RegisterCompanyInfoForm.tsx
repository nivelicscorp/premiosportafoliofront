import Input from '@atoms/Input/Input'
import { DescripcionDelProyecto } from '@models/getForms.model'
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
        label={
          data?.postulacion_empresa_directa?.nombre_completo?.['#title'] ?? ''
        }
        type={
          data?.postulacion_empresa_directa?.nombre_completo?.['#type'] ?? ''
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
          label={data?.postulacion_empresa_directa?.nit?.['#title'] ?? ''}
          type={data?.postulacion_empresa_directa?.nit?.['#type'] ?? ''}
          placeholder={`${data?.postulacion_empresa_directa?.nit?.['#title']}...`}
          hasError={errors?.NitCompany ? true : false}
          {...formDirective('NitCompany', {
            required: data?.postulacion_empresa_directa?.nit?.['#required'],
          })}
        />
        <Input
          label={
            data?.postulacion_empresa_directa?.numero_de_documento?.[
              '#title'
            ] ?? ''
          }
          type={
            data?.postulacion_empresa_directa?.numero_de_documento?.['#type'] ??
            ''
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
        label={
          data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#title'] ??
          ''
        }
        type={
          data?.postulacion_empresa_directa?.ciudad_de_residencia?.['#type'] ??
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
        label={data?.postulacion_empresa_directa?.direccion?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.direccion?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.direccion?.['#title']}...`}
        hasError={errors?.directionCompany ? true : false}
        {...formDirective('directionCompany', {
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
        hasError={errors?.whoContactCompany ? true : false}
        {...formDirective('whoContactCompany', {
          required:
            data?.postulacion_empresa_directa?.quien_contactar?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.cargo?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.cargo?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.cargo?.['#title']}...`}
        hasError={errors?.laborCompany ? true : false}
        {...formDirective('laborCompany', {
          required: data?.postulacion_empresa_directa?.cargo?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.correo?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.correo?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.correo?.['#title']}...`}
        hasError={errors?.corporateEmailCompany ? true : false}
        {...formDirective('corporateEmailCompany', {
          required: data?.postulacion_empresa_directa?.correo?.['#required'],
        })}
      />
      <Input
        label={data?.postulacion_empresa_directa?.celular?.['#title'] ?? ''}
        type={data?.postulacion_empresa_directa?.celular?.['#type'] ?? ''}
        placeholder={`${data?.postulacion_empresa_directa?.celular?.['#title']}...`}
        hasError={errors?.celphoneCompany ? true : false}
        {...formDirective('celphoneCompany', {
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
          required: data?.postulacion_empresa_directa?.telefono?.['#required'],
        })}
      />
    </div>
  )
}

export default RegisterCompanyInfoForm
