import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { AdjuntarDocumentacion } from '@models/getForms.model'
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
  data: AdjuntarDocumentacion
  formDirective: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const RegisterPersonStudiesForm = ({
  data,
  formDirective,
  setValue,
}: FormProps) => {
  const [studies, setStudies] = useState<CardStudiesProps[]>([])
  const [pagination, setPagination] = useState(3)
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
    reset,
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
        <h3>{data?.['#title']}</h3>
        <Input
          label={data?.estudio?.['#element']?.estudio?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.estudio?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.estudio?.['#title']}...`}
          options={
            Object.values(
              data?.estudio?.['#element']?.estudio?.['#options'] ?? {}
            ) ?? []
          }
          hasError={errors?.estudio ? true : false}
          {...register('estudio', {
            required: data?.estudio?.['#element']?.estudio?.['#required'],
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.institucion?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.institucion?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.institucion?.['#title']}...`}
          hasError={errors?.institucion ? true : false}
          {...register('institucion', {
            required: data?.estudio?.['#element']?.institucion?.['#required'],
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.anio?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.anio?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.anio?.['#title']}...`}
          smallLabel={
            !data?.estudio?.['#element']?.anio?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.anio ? true : false}
          {...register('anio', {
            required: data?.estudio?.['#element']?.anio?.['#required'],
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.otros?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.otros?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.otros?.['#title']}...`}
          smallLabel={
            !data?.estudio?.['#element']?.otros?.['#required']
              ? '(Opcional)'
              : ''
          }
          hasError={errors?.otros ? true : false}
          {...register('otros', {
            required: data?.estudio?.['#element']?.otros?.['#required'],
          })}
        />
        <Button
          title={'Agregar'}
          variant={'tertiary'}
          type='button'
          clickHandler={handleSubmit(onSubmit)}
        />
      </div>
      <h4>Estudios Ingresados</h4>
      {studies.slice(0, pagination).map((study, index) => (
        <Fragment key={index}>
          <CardStudies
            estudio={study.estudio}
            estudioLabel={data?.estudio?.['#element']?.estudio?.['#title']}
            institucion={study.institucion}
            institucionLabel={
              data?.estudio?.['#element']?.institucion?.['#title']
            }
            anio={study.anio}
            anioLabel={data?.estudio?.['#element']?.anio?.['#title']}
            otros={study.otros}
            otrosLabel={data?.estudio?.['#element']?.otros?.['#title']}
            handleClick={() => {
              const newStudies = studies.filter((_, i) => i !== index)
              setStudies(newStudies)
              setValue('studies', newStudies)
            }}
          />
        </Fragment>
      ))}
      {studies.length > pagination && (
        <Button
          title={'Ver más'}
          variant={'tertiary'}
          clickHandler={() => setPagination(pagination + 3)}
        />
      )}
    </div>
  )
}

export default RegisterPersonStudiesForm
