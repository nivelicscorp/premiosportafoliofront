import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { CardExperienceProps } from '@models/experience.model'
import { AdjuntarDocumentacion } from '@models/getForms.model'
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
  data: AdjuntarDocumentacion
  formDirective: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const RegisterPersonExperienceForm = ({
  data,
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
    reset,
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
        <h3>{data?.['#title']}</h3>
        <Input
          label={data?.empleador?.['#element']?.empleador?.['#title'] ?? ''}
          type={data?.empleador?.['#element']?.empleador?.['#type'] ?? ''}
          placeholder={`${data?.empleador?.['#element']?.empleador?.['#title']}...`}
          smallLabel={
            !data?.empleador?.['#element']?.empleador?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.empleador ? true : false}
          {...register('empleador', {
            required: data?.empleador?.['#element']?.empleador?.['#required'],
          })}
        />
        <Input
          label={data?.empleador?.['#element']?.cargo?.['#title'] ?? ''}
          type={data?.empleador?.['#element']?.cargo?.['#type'] ?? ''}
          placeholder={`${data?.empleador?.['#element']?.cargo?.['#title']}...`}
          smallLabel={
            !data?.empleador?.['#element']?.cargo?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.cargo ? true : false}
          {...register('cargo', {
            required: data?.empleador?.['#element']?.cargo?.['#required'],
          })}
        />
        <Input
          label={data?.empleador?.['#element']?.anio?.['#title'] ?? ''}
          type={data?.empleador?.['#element']?.anio?.['#type'] ?? ''}
          placeholder={`${data?.empleador?.['#element']?.anio?.['#title']}...`}
          smallLabel={
            !data?.empleador?.['#element']?.anio?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.anio ? true : false}
          {...register('anio', {
            required: data?.empleador?.['#element']?.anio?.['#required'],
          })}
        />
        <Input
          label={data?.empleador?.['#element']?.telefono?.['#title'] ?? ''}
          type={data?.empleador?.['#element']?.telefono?.['#type'] ?? ''}
          placeholder={`${data?.empleador?.['#element']?.telefono?.['#title']}...`}
          smallLabel={
            !data?.empleador?.['#element']?.telefono?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.telefono ? true : false}
          {...register('telefono', {
            required: data?.empleador?.['#element']?.telefono?.['#required'],
          })}
        />
        <Input
          label={
            data?.empleador?.['#element']?.otras_actividades?.['#title'] ?? ''
          }
          type={
            data?.empleador?.['#element']?.otras_actividades?.['#type'] ?? ''
          }
          placeholder={`${data?.empleador?.['#element']?.otras_actividades?.['#title']}...`}
          smallLabel={
            !data?.empleador?.['#element']?.otras_actividades?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.otras_actividades ? true : false}
          {...register('otras_actividades', {
            required:
              data?.empleador?.['#element']?.otras_actividades?.['#required'],
          })}
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
            empleador={exp.empleador}
            empleadorLabel={
              data?.empleador?.['#element']?.empleador?.['#title']
            }
            cargo={exp.cargo}
            cargoLabel={data?.empleador?.['#element']?.cargo?.['#title']}
            telefono={exp.telefono}
            telefonoLabel={data?.empleador?.['#element']?.telefono?.['#title']}
            anio={exp.anio}
            anioLabel={data?.empleador?.['#element']?.anio?.['#title']}
            otras_actividades={exp.otras_actividades}
            otras_actividadesLabel={
              data?.empleador?.['#element']?.otras_actividades?.['#title']
            }
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
