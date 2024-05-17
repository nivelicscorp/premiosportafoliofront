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
    <div
      style={{
        width: '500px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h3>{data?.postulacion_agencia?.['#title']}</h3>
      <Input
        label={data?.postulacion_agencia?.nombre_completo?.['#title'] ?? ''}
        type={data?.postulacion_agencia?.nombre_completo?.['#type'] ?? 'text'}
        placeholder={`${data?.postulacion_agencia?.nombre_completo?.['#title']}...`}
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
        placeholder={
          data?.postulacion_agencia?.nombre_representante_agencia?.['#title'] ??
          'Nombre representante de la agencia...'
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
        placeholder={
          data?.postulacion_agencia?.correo_contacto_agencia?.['#title'] ??
          'Correo contacto de la agencia...'
        }
        hasError={errors?.contactEmailAgency ? true : false}
        {...formDirective('contactEmailAgency', {
          required:
            data?.postulacion_agencia?.correo_contacto_agencia?.['#required'],
        })}
      />
      <Input
        label={
          data?.postulacion_agencia?.celular?.['#title'] ??
          'Celular contacto de la agencia'
        }
        type={data?.postulacion_agencia?.celular?.['#type'] ?? 'text'}
        placeholder={
          data?.postulacion_agencia?.celular?.['#title'] ??
          'Celular contacto de la agencia...'
        }
        hasError={errors?.contactCelphoneAgency ? true : false}
        {...formDirective('contactCelphoneAgency', {
          required: data?.postulacion_agencia?.celular?.['#required'],
        })}
      />
      <h3>Datos empresa/persona participante</h3>
      <Input
        type='text'
        label='Nombre Completo'
        placeholder='Nombre Completo...'
        {...formDirective('completeNameAgency')}
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
          label='Tipo de documento'
          placeholder='Seleccione...'
          options={['CC', 'CE', 'Pasaporte']}
          {...formDirective('documentTypeAgency')}
        />
        <Input
          type='text'
          label='Número documento'
          placeholder='Número...'
          {...formDirective('documentIdAgency')}
        />
      </div>
      <Input
        type='text'
        label='Departamento'
        placeholder='Departamento...'
        {...formDirective('departmentAgency')}
      />
      <Input
        type='text'
        label='Ciudad'
        placeholder='Ciudad...'
        {...formDirective('cityAgency')}
      />
    </div>
  )
}

export default RegisterAgencyInfoForm
