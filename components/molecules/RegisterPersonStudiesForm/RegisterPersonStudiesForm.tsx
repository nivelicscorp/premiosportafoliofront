import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { AdjuntarDocumentacion } from '@models/getForms.model'
import { PostFormPerson } from '@models/postFormPerson.model'
import { CardStudiesProps } from '@models/studies.model'
import CardStudies from '@molecules/Cards/CardStudies/CardStudies'
import { Fragment, useEffect, useState } from 'react'
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
  preloaded: PostFormPerson
}

const RegisterPersonStudiesForm = ({
  data,
  formDirective,
  setValue,
  preloaded,
}: FormProps) => {
  const [studies, setStudies] = useState<any[]>([])
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

  useEffect(() => {
    if (preloaded?.estudio) {
      setStudies(preloaded?.estudio ?? [])
      setValue('studies', [...preloaded?.estudio])
    }
  }, [preloaded])

  return (
    <div className='form step2'>
      <div className='form'>
        <div className='title-step'>
          <h3 className='title-text'>{data?.['#title']}</h3>
        </div>
        <Input
          label={data?.estudio?.['#element']?.estudio?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.estudio?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.estudio?.['#title']}...`}
          smallLabel=' (Univesitario, especialización, maestría, doctorado)'
          options={
            Object.values(
              data?.estudio?.['#element']?.estudio?.['#options'] ?? {}
            ) ?? []
          }
          hasError={errors?.estudio ? true : false}
          {...register('estudio', {
            required: true,
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.institucion?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.institucion?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.institucion?.['#title']}...`}
          hasError={errors?.institucion ? true : false}
          {...register('institucion', {
            required: true,
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
            required: true,
            pattern: /^\d{4}$/,
            max: new Date().getFullYear(),
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.promedio?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.promedio?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.promedio?.['#title']}...`}
          smallLabel={'(Aplica para categoría a Mejor Estudiante)'}
          hasError={errors?.promedio ? true : false}
          {...register('promedio', {
            required: true,
          })}
        />
        <Input
          label={data?.estudio?.['#element']?.otros?.['#title'] ?? ''}
          type={data?.estudio?.['#element']?.otros?.['#type'] ?? ''}
          placeholder={`${data?.estudio?.['#element']?.otros?.['#title']}...`}
          smallLabel='(Reconocimientos)'
          hasError={errors?.otros ? true : false}
          {...register('otros', {
            required: false,
          })}
        />
        <div className='form-btn add'>
          <Button
            title={'Agregar'}
            variant={'tertiary'}
            type='button'
            clickHandler={handleSubmit(onSubmit)}
          />
        </div>
      </div>
      {studies.length > 0 && (
        <h4 className='form-title-black'>Estudios Ingresados</h4>
      )}
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
        <div className='form-btn'>
          <Button
            title={'Ver más'}
            variant={'tertiary'}
            clickHandler={() => setPagination(pagination + 3)}
          />
        </div>
      )}
    </div>
  )
}

export default RegisterPersonStudiesForm
