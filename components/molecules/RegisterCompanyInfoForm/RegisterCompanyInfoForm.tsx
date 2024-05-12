import Input from '@atoms/Input/Input'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const RegisterCompanyInfoForm = ({ formDirective }: FormProps) => {
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
      <h3>Postulación empresa directa</h3>
      <Input
        type='text'
        label='Nombre de la empresa'
        placeholder='Nombre de la empresa...'
        {...formDirective('nameCompany')}
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
          label='Nit'
          placeholder='Nit...'
          {...formDirective('NitCompany')}
        />
        <Input
          type='text'
          label='Número documento'
          placeholder='Número...'
          {...formDirective('documentIdCompany')}
        />
      </div>
      <Input
        type='text'
        label='Departamento de residencia'
        placeholder='Departamento...'
        {...formDirective('departmentCompany')}
      />
      <Input
        type='text'
        label='Ciudad residencia'
        placeholder='Ciudad...'
        {...formDirective('cityCompany')}
      />
      <Input
        type='text'
        label='Dirección'
        placeholder='Dirección...'
        {...formDirective('directionCompany')}
      />
      <Input
        type='text'
        label='A quién contactar'
        placeholder='a quién contactar...'
        {...formDirective('whoContactCompany')}
      />
      <Input
        type='text'
        label='Cargo'
        placeholder='Cargo...'
        {...formDirective('laborCompany')}
      />
      <Input
        type='text'
        label='Correo corporativo'
        placeholder='Correo corporativo...'
        {...formDirective('corporateEmailCompany')}
      />
      <Input
        type='text'
        label='Celular'
        placeholder='Celular...'
        {...formDirective('celphoneCompany')}
      />
      <Input
        type='text'
        label='Teléfono'
        smallLabel='(Opcional)'
        placeholder='Teléfono...'
        {...formDirective('phoneCompany')}
      />
    </div>
  )
}

export default RegisterCompanyInfoForm
