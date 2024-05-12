import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { CardExperienceProps } from '@models/experience.model'
import CardExperience from '@molecules/Cards/CardExperience/CardExperience'
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

const RegisterPersonExperienceForm = ({
  formDirective,
  setValue,
}: FormProps) => {
  const [experience, setExperience] = useState<CardExperienceProps[]>([])
  formDirective('experience', { value: experience })
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = async (data) => {
    setExperience([...experience, data])
    setValue('experience', [...experience, data])
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
        <h3>Experiencia Laboral</h3>
        <Input
          type='text'
          label='Empresa o Universidad'
          placeholder='Empresa o Universidad...'
          {...register('entity')}
        />
        <Input
          type='text'
          label='Cargo'
          placeholder='Cargo...'
          {...register('labor')}
        />
        <Input
          type='text'
          label='Año'
          placeholder='Año...'
          {...register('year')}
        />
        <Input
          type='text'
          label='Teléfono'
          placeholder='Teléfono...'
          {...register('phone')}
        />
        <Input
          type='textarea'
          label='Otras Actividades'
          smallLabel='(Opcional)'
          placeholder='Otras Actividades...'
          {...register('others')}
        />
        <Button
          title={'Agregar'}
          variant={'tertiary'}
          type='button'
          clickHandler={handleSubmit(onSubmit)}
        />
      </div>
      <h4>Experiencias Laborales Ingresadas</h4>
      {experience.map((exp, index) => (
        <Fragment key={index}>
          <CardExperience
            entity={exp.entity}
            labor={exp.labor}
            phone={exp.phone}
            year={exp.year}
            others={exp.others}
            handleClick={() => {
              const newExperience = experience.filter((_, i) => i !== index)
              setExperience(newExperience)
              setValue('experience', newExperience)
            }}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default RegisterPersonExperienceForm
