import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { CardStudiesProps } from '@models/studies.model'
import CardStudies from '@molecules/Cards/CardStudies/CardStudies'
import { Fragment, useState } from 'react'
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const RegisterPersonStudiesForm = ({ formDirective, setValue }: FormProps) => {
  const [studies, setStudies] = useState<CardStudiesProps[]>([])
  /**
   * Set the studies in the form
   */
  formDirective('studies', { value: studies })
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  /**
   * Function to add the studies to the list
   * @param data - Data to add to the list
   */
  const onSubmit: SubmitHandler<any> = async (data) => {
    setStudies([...studies, data])
    setValue('studies', [...studies, data])
  }

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h3>Formación Académica</h3>
        <Input
          type='select'
          label='Estudio'
          placeholder='Seleccione...'
          options={[
            'Universitario',
            'Especialización',
            'Maestría',
            'Doctorado',
          ]}
          {...register('estudio')}
        />
        <Input
          type='text'
          label='Institución'
          placeholder='Institución...'
          {...register('institucion')}
        />
        <Input
          type='text'
          label='Año'
          placeholder='Año...'
          {...register('anio')}
        />
        <Input
          type='textarea'
          label='Otros'
          placeholder='Otros...'
          {...register('otros')}
        />
        <Button
          title={'Agregar'}
          variant={'tertiary'}
          type='button'
          clickHandler={handleSubmit(onSubmit)}
        />
      </div>
      <h4>Estudios Ingresados</h4>
      {studies.map((study, index) => (
        <Fragment key={index}>
          <CardStudies
            study={study.study}
            institution={study.institution}
            year={study.year}
            others={study.others}
            handleClick={() => {
              const newStudies = studies.filter((_, i) => i !== index)
              setStudies(newStudies)
              setValue('studies', newStudies)
            }}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default RegisterPersonStudiesForm
