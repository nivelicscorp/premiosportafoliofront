import Input from '@atoms/Input/Input'
import Image from 'next/image'
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
import { DescripcionDelProyecto } from '@models/getCompanyForm.model'

interface FormProps {
  role: string
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
}: FormProps) => {
  console.log('data', data)

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
    <div style={{ width: '800px', margin: '20px auto' }}>
      <h3>
        Nota: <br />
        <ul>
          <li>
            Por favor adjuntar el certificado de Cámara de comercio, RUT
            {role === 'persona' &&
              `. reconocimientos y certificado del semestre actual y/o acta de grado (Certificados o acta de grado, sólo aplica para categoría de Mejor Estudiante)`}
            {(role === 'agencia' || role === 'empresa') &&
              ` y
            estados financieros de los últimos tres años (Estados financieros,
            sólo aplica para categoría de Esfuerzo exportador).`}
          </li>
        </ul>
      </h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <p>{data?.adjuntar_documentacion?.['#title']}</p>
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '10px',
          }}
        >
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
      <h3>Imágen de referencia</h3>
      <Image
        src='/img/reference_upload.png'
        alt='ref'
        width={578}
        height={102}
      />
    </div>
  )
}

export default UploadFilesForm
