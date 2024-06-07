import Input from '@atoms/Input/Input'
import { FileTypeModel } from '@models/fileType.model'
import CardFile from '@molecules/Cards/CardFile/CardFile'
import { onFileAttachImage } from '@utils/uploadFiles'
import { Fragment, useRef, useState } from 'react'
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  FieldErrors,
} from 'react-hook-form'
import { DescripcionDelProyecto } from '@models/getForms.model'
import styles from '@styles/scss/molecules/categoryForm.module.scss'

interface FormProps {
  role: string
  className?: string
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  errors: FieldErrors<FieldValues>
}

const UploadFilesForm = ({
  data,
  errors,
  role,
  formDirective,
  setValue,
  className,
}: FormProps) => {
  const [filesLoaded, setFilesLoaded] = useState<FileTypeModel[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  // Create a ref for the input
  const inputRef = useRef<HTMLInputElement>(null)
  /**
   * Set the files loaded in the form
   */
  formDirective('files', {
    value: filesLoaded,
    required: data?.adjuntar_documentacion?.archivos?.['#required'],
  })
  return (
    <div className={styles?.categoryForm__step4}>
      {/* NOTE */}
      <div className={styles?.categoryForm__note}>
        <h3 className={styles?.categoryForm__note__title}> Nota: </h3>
        <ul className={styles?.categoryForm__note__list}>
          {(role === 'agencia' || role === 'empresa') && (
            <li>
              Por favor adjuntar el certificado de Cámara de comercio, RUT y
              estados financieros de los últimos tres años (Estados financieros,
              sólo aplica para categoría de Esfuerzo exportador).
            </li>
          )}
          {role === 'persona' && (
            <li>
              Por favor adjuntar fotocopia de la cédula, aplica para todas las
              categorías. Para categoría de Mejor Estudiante, por favor adjuntar
              certificado del semestre actual y/o acta de grado.
            </li>
          )}
        </ul>
      </div>
      {/* FORM */}
      <div className={styles?.categoryForm__content}>
        <div className={className + ' form'}>
          <h3 className='form-subTitle'>
            {data?.adjuntar_documentacion?.['#title']}
          </h3>
          <Input
            ref={inputRef}
            type='file'
            label={data?.adjuntar_documentacion?.archivos?.['#title'] ?? ''}
            name='files'
            hasError={errors?.files ? true : false}
            errorMessage={errorMessage}
            tooltipLabel='Tenga en cuenta que los archivos deben llevar el nombre del participante y # de documento (NIT si es empresa)'
            accept='.pdf'
            onChange={async (e) => {
              const response = await onFileAttachImage(
                e?.target?.files[0],
                filesLoaded,
                ['application/pdf'],
                /^\d+_[A-Za-z_]+\.pdf$/
              )
              // Reset the input value
              if (inputRef.current) {
                inputRef.current.value = ''
              }
              if (typeof response === 'string') {
                setErrorMessage(response)
                return
              }
              setErrorMessage('')
              setFilesLoaded([...filesLoaded, response])
              setValue('files', [...filesLoaded, response], {
                shouldValidate: true,
              })
            }}
          />
          <div className='form-files'>
            {filesLoaded.length > 0 &&
              filesLoaded.map((file, index) => (
                <Fragment key={index}>
                  <CardFile
                    name={file.name}
                    handleClick={() => {
                      setFilesLoaded(
                        filesLoaded.filter((f) => f.name !== file.name)
                      )
                      setValue(
                        'files',
                        filesLoaded.filter((f) => f.name !== file.name)
                      )
                    }}
                  />
                </Fragment>
              ))}
          </div>
        </div>
        <h3 className='form-subTitle'>Imágen de referencia</h3>
        <picture>
          <source
            srcSet='/img/reference_upload.png'
            media='(min-width: 600px)'
          />
          <img src='/img/reference_upload.png' alt='MDN' />
        </picture>
      </div>
    </div>
  )
}

export default UploadFilesForm
