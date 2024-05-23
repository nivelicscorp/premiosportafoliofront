import Input from '@atoms/Input/Input'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const RegisterAgencyInfoForm = ({ data, errors, formDirective }: FormProps) => {
  return (
    <div className='form step2'>
      <div className='title-step'>
        <h3 className='title-text'>{data?.postulacion_agencia?.['#title']}</h3>
      </div>
      <Input
        label={data?.postulacion_agencia?.nombre_completo?.['#title'] ?? ''}
        type={data?.postulacion_agencia?.nombre_completo?.['#type'] ?? 'text'}
        placeholder={`${data?.postulacion_agencia?.nombre_completo?.['#title']}...`}
        smallLabel={
          !data?.postulacion_agencia?.nombre_completo?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.nameAgency ? true : false}
        {...formDirective('nameAgency', {
          required: data?.postulacion_agencia?.nombre_completo?.['#required'],
        })}
      />
      <Input
        label={
          data?.postulacion_agencia?.nombre_representante_agencia?.['#title'] ??
          'Nombre representante de la agencia'
        }
        type={
          data?.postulacion_agencia?.nombre_representante_agencia?.['#type'] ??
          'text'
        }
        placeholder={`${data?.postulacion_agencia?.nombre_representante_agencia?.['#title']}...`}
        smallLabel={
          !data?.postulacion_agencia?.nombre_representante_agencia?.[
            '#required'
          ]
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.legalRepresentativeAgency ? true : false}
        {...formDirective('legalRepresentativeAgency', {
          required:
            data?.postulacion_agencia?.nombre_representante_agencia?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.postulacion_agencia?.correo_contacto_agencia?.['#title'] ??
          'Correo contacto de la agencia'
        }
        type={
          data?.postulacion_agencia?.correo_contacto_agencia?.['#type'] ??
          'text'
        }
        placeholder={`${data?.postulacion_agencia?.correo_contacto_agencia?.['#title']}...`}
        smallLabel={
          !data?.postulacion_agencia?.correo_contacto_agencia?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.contactEmailAgency ? true : false}
        {...formDirective('contactEmailAgency', {
          required:
            data?.postulacion_agencia?.correo_contacto_agencia?.['#required'],
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: 'Correo inválido',
          },
        })}
      />
      <Input
        label={
          data?.postulacion_agencia?.celular?.['#title'] ??
          'Celular contacto de la agencia'
        }
        type={data?.postulacion_agencia?.celular?.['#type'] ?? 'text'}
        placeholder={`${data?.postulacion_agencia?.celular?.['#title']}...`}
        smallLabel={
          !data?.postulacion_agencia?.celular?.['#required'] ? '(Opcional)' : ''
        }
        hasError={errors?.contactCelphoneAgency ? true : false}
        {...formDirective('contactCelphoneAgency', {
          required: data?.postulacion_agencia?.celular?.['#required'],
        })}
      />
      <div className='form-subTitle'>
        <h3> {data?.datos_empresa_persona_participate?.['#title']} </h3>
      </div>
      <Input
        label={
          data?.datos_empresa_persona_participate?.nombre_participante?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.datos_empresa_persona_participate?.nombre_participante?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${data?.datos_empresa_persona_participate?.nombre_participante?.['#title']}...`}
        smallLabel={
          !data?.datos_empresa_persona_participate?.nombre_participante?.[
            '#required'
          ]
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.completeNameAgency ? true : false}
        {...formDirective('completeNameAgency', {
          required:
            data?.datos_empresa_persona_participate?.nombre_participante?.[
              '#required'
            ],
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
          type='select'
          label={
            data?.datos_empresa_persona_participate?.tipo_de_documento?.[
              '#title'
            ] ?? ''
          }
          placeholder={`${data?.datos_empresa_persona_participate?.tipo_de_documento?.['#title']}...`}
          smallLabel={
            !data?.datos_empresa_persona_participate?.tipo_de_documento?.[
              '#required'
            ]
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.documentTypeAgency ? true : false}
          options={
            Object.keys(
              data?.datos_empresa_persona_participate?.tipo_de_documento?.[
                '#options'
              ] ?? {}
            ) ?? []
          }
          {...formDirective('documentTypeAgency', {
            required:
              data?.datos_empresa_persona_participate?.tipo_de_documento?.[
                '#required'
              ],
          })}
        />
        <Input
          label={
            data?.datos_empresa_persona_participate?.numero_?.['#title'] ?? ''
          }
          type={
            data?.datos_empresa_persona_participate?.numero_?.['#type'] ?? ''
          }
          placeholder={`${data?.datos_empresa_persona_participate?.numero_?.['#title']}...`}
          smallLabel={
            !data?.datos_empresa_persona_participate?.numero_?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.documentIdAgency ? true : false}
          {...formDirective('documentIdAgency', {
            required:
              data?.datos_empresa_persona_participate?.numero_?.['#required'],
          })}
        />
      </div>
      <Input
        label={
          data?.datos_empresa_persona_participate?.departamento?.['#title'] ??
          ''
        }
        type={
          data?.datos_empresa_persona_participate?.departamento?.['#type'] ?? ''
        }
        placeholder={`${data?.datos_empresa_persona_participate?.departamento?.['#title']}...`}
        smallLabel={
          !data?.datos_empresa_persona_participate?.departamento?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.departmentAgency ? true : false}
        {...formDirective('departmentAgency', {
          required:
            data?.datos_empresa_persona_participate?.departamento?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.datos_empresa_persona_participate?.ciudad?.['#title'] ?? ''
        }
        type={data?.datos_empresa_persona_participate?.ciudad?.['#type'] ?? ''}
        placeholder={`${data?.datos_empresa_persona_participate?.ciudad?.['#title']}...`}
        smallLabel={
          !data?.datos_empresa_persona_participate?.ciudad?.['#required']
            ? '(Opcional)'
            : ''
        }
        hasError={errors?.cityAgency ? true : false}
        {...formDirective('cityAgency', {
          required:
            data?.datos_empresa_persona_participate?.ciudad?.['#required'],
        })}
      />
    </div>
  )
}

export default RegisterAgencyInfoForm
