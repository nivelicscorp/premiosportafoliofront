import Input from '@atoms/Input/Input'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const RegisterAgencyInfoForm = ({ formDirective }: FormProps) => {
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
      <h3>Postulación a través de agencia</h3>
      <Input
        type='text'
        label='Nombre de la agencia'
        placeholder='Nombre de la agencia...'
        {...formDirective('nameAgency')}
      />
      <Input
        type='text'
        label='Nombre representante de la agencia'
        placeholder='Nombre representante de la agencia...'
        {...formDirective('legalRepresentativeAgency')}
      />
      <Input
        type='text'
        label='Correo contacto de la agencia'
        placeholder='Correo contacto de la agencia...'
        {...formDirective('contactEmailAgency')}
      />
      <Input
        type='text'
        label='Celular contacto de la agencia'
        placeholder='Celular contacto de la agencia...'
        {...formDirective('contactCelphoneAgency')}
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
          options={['C.C', 'C.E', 'Pasaporte']}
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
