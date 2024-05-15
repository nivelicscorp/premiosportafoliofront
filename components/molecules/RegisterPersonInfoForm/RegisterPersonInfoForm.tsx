import Input from '@atoms/Input/Input'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const RegisterPersonInfoForm = ({ formDirective }: FormProps) => {
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
      <h3>Postulación persona directa</h3>
      <Input
        type='text'
        label='Nombre Completo'
        placeholder='Nombre Completo...'
        {...formDirective('namePerson')}
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
          {...formDirective('documentTypePerson')}
        />
        <Input
          type='text'
          label='Número documento'
          placeholder='Número...'
          {...formDirective('documentIdPerson')}
        />
      </div>
      <Input
        type='text'
        label='País de Nacimiento'
        placeholder='País de Nacimiento...'
        {...formDirective('countryPerson')}
      />
      <Input
        type='text'
        label='Departmento de Nacimiento'
        placeholder='Departmento de Nacimiento...'
        {...formDirective('departmentPerson')}
      />
      <Input
        type='text'
        label='Departamento de Residencia'
        placeholder='Departamento de Residencia...'
        {...formDirective('departmentResidencePerson')}
      />
      <Input
        type='text'
        label='Ciudad de Residencia'
        placeholder='Ciudad de Residencia...'
        {...formDirective('cityPerson')}
      />
      <Input
        type='text'
        label='Empresa o Universidad'
        placeholder='Empresa o Universidad...'
        {...formDirective('laborCompany')}
      />
      <Input
        type='text'
        label='Correo'
        placeholder='Correo...'
        {...formDirective('emailPerson')}
      />
      <Input
        type='text'
        label='Celular'
        placeholder='Celular...'
        {...formDirective('celphonePerson')}
      />
      <Input
        type='text'
        label='Segundo contacto'
        smallLabel='(Opcional)'
        placeholder='(Teléfono asistente presidencial)...'
        {...formDirective('phonePerson')}
      />
    </div>
  )
}

export default RegisterPersonInfoForm
