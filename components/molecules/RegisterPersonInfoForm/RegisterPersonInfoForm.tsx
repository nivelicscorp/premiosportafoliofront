import Input from '@atoms/Input/Input'
import { PostulacionPersonaDirecta } from '@models/getForms.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: PostulacionPersonaDirecta
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const RegisterPersonInfoForm = ({ data, errors, formDirective }: FormProps) => {
  return (
    <div className='form'>
      <h3>{data?.['#title']}</h3>
      <Input
        label={data?.nombre_completo?.['#title'] ?? ''}
        type={data?.nombre_completo?.['#type'] ?? ''}
        smallLabel={!data?.nombre_completo?.['#required'] ? '(Opcional)' : ''}
        placeholder={`${data?.nombre_completo?.['#title']}...`}
        hasError={errors?.namePerson ? true : false}
        {...formDirective('namePerson', {
          required: data?.nombre_completo?.['#required'],
        })}
      />
      <div className='form'>
        <Input
          label={data?.tipo_de_documento?.['#title'] ?? ''}
          type={data?.tipo_de_documento?.['#type'] ?? ''}
          smallLabel={
            !data?.tipo_de_documento?.['#required'] ? '(Opcional)' : ''
          }
          placeholder={`${data?.tipo_de_documento?.['#title']}...`}
          options={
            Object.keys(data?.tipo_de_documento?.['#options'] ?? {}) ?? []
          }
          hasError={errors?.documentTypePerson ? true : false}
          {...formDirective('documentTypePerson', {
            required: data?.tipo_de_documento?.['#required'],
          })}
        />
        <Input
          label={data?.numero_de_documento?.['#title'] ?? ''}
          type={data?.numero_de_documento?.['#type'] ?? ''}
          smallLabel={
            !data?.numero_de_documento?.['#required'] ? '(Opcional)' : ''
          }
          placeholder={`${data?.numero_de_documento?.['#title']}...`}
          hasError={errors?.documentIdPerson ? true : false}
          {...formDirective('documentIdPerson', {
            required: data?.numero_de_documento?.['#required'],
          })}
        />
      </div>
      <Input
        label={data?.pais_de_nacimiento?.['#title'] ?? ''}
        type={data?.pais_de_nacimiento?.['#type'] ?? ''}
        smallLabel={
          !data?.pais_de_nacimiento?.['#required'] ? '(Opcional)' : ''
        }
        placeholder={`${data?.pais_de_nacimiento?.['#title']}...`}
        hasError={errors?.countryPerson ? true : false}
        {...formDirective('countryPerson', {
          required: data?.pais_de_nacimiento?.['#required'],
        })}
      />
      <Input
        label={data?.departamento_de_nacimiento?.['#title'] ?? ''}
        type={data?.departamento_de_nacimiento?.['#type'] ?? ''}
        smallLabel={
          !data?.departamento_de_nacimiento?.['#required'] ? '(Opcional)' : ''
        }
        placeholder={`${data?.departamento_de_nacimiento?.['#title']}...`}
        hasError={errors?.departmentPerson ? true : false}
        {...formDirective('departmentPerson', {
          required: data?.departamento_de_nacimiento?.['#required'],
        })}
      />
      <Input
        label={data?.departamento_de_residencia?.['#title'] ?? ''}
        type={data?.departamento_de_residencia?.['#type'] ?? ''}
        smallLabel={
          !data?.departamento_de_residencia?.['#required'] ? '(Opcional)' : ''
        }
        placeholder={`${data?.departamento_de_residencia?.['#title']}...`}
        hasError={errors?.departmentResidencePerson ? true : false}
        {...formDirective('departmentResidencePerson', {
          required: data?.departamento_de_residencia?.['#required'],
        })}
      />
      <Input
        label={data?.ciudad_de_residencia?.['#title'] ?? ''}
        type={data?.ciudad_de_residencia?.['#type'] ?? ''}
        smallLabel={
          !data?.ciudad_de_residencia?.['#required'] ? '(Opcional)' : ''
        }
        placeholder={`${data?.ciudad_de_residencia?.['#title']}...`}
        hasError={errors?.cityPerson ? true : false}
        {...formDirective('cityPerson', {
          required: data?.ciudad_de_residencia?.['#required'],
        })}
      />
      <Input
        label={data?.empresa_universidad?.['#title'] ?? ''}
        type={data?.empresa_universidad?.['#type'] ?? ''}
        smallLabel={
          !data?.empresa_universidad?.['#required'] ? '(Opcional)' : ''
        }
        placeholder={`${data?.empresa_universidad?.['#title']}...`}
        hasError={errors?.laborCompany ? true : false}
        {...formDirective('laborCompany', {
          required: data?.empresa_universidad?.['#required'],
        })}
      />
      <Input
        label={data?.correo?.['#title'] ?? ''}
        type={data?.correo?.['#type'] ?? ''}
        smallLabel={!data?.correo?.['#required'] ? '(Opcional)' : ''}
        placeholder={`${data?.correo?.['#title']}...`}
        hasError={errors?.emailPerson ? true : false}
        {...formDirective('emailPerson', {
          required: data?.correo?.['#required'],
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: 'Correo inválido',
          },
        })}
      />
      <Input
        label={data?.celular?.['#title'] ?? ''}
        type={data?.celular?.['#type'] ?? ''}
        smallLabel={!data?.celular?.['#required'] ? '(Opcional)' : ''}
        placeholder={`${data?.celular?.['#title']}...`}
        hasError={errors?.celphonePerson ? true : false}
        {...formDirective('celphonePerson', {
          required: data?.celular?.['#required'],
        })}
      />
      <Input
        label={data?.segundo_contacto?.['#title'] ?? ''}
        type={data?.segundo_contacto?.['#type'] ?? ''}
        smallLabel={!data?.segundo_contacto?.['#required'] ? '(Opcional)' : ''}
        placeholder={`${data?.segundo_contacto?.['#title']}...`}
        hasError={errors?.phonePerson ? true : false}
        {...formDirective('phonePerson', {
          required: data?.segundo_contacto?.['#required'],
        })}
      />
    </div>
  )
}

export default RegisterPersonInfoForm
