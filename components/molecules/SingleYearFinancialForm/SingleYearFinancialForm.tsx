import { FinancialTitle } from '@atoms/FinancialTitle/FinancialTitle'
import Input from '@atoms/Input/Input'
import { PostFormAgency } from '@models/postFormAgency.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
interface FormProps {
  data: any
  nameFieldYear: string
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  preloaded: PostFormCompany
}

const SingleYearFinancialForm = ({
  data,
  nameFieldYear,
  formDirective,
  errors,
  preloaded,
}: FormProps) => {
  return (
    <div className='form step-5'>
      <FinancialTitle>{data?.['#title']}</FinancialTitle>
      <div className='form step-5-inputs'>
        <Input
          label={
            data?.activos?.['#title'] ??
            data?.activos_2022?.['#title'] ??
            data?.activos_2023?.['#title']
          }
          type={
            data?.activos?.['#type'] ??
            data?.activos_2022?.['#type'] ??
            data?.activos_2023?.['#type']
          }
          placeholder={`${data?.activos?.['#title'] ?? ''}${
            data?.activos_2022?.['#title'] ?? ''
          }${data?.activos_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`actives${nameFieldYear}`] ? true : false}
          {...formDirective(`actives${nameFieldYear}`, {
            value: data?.activos?.['#title']
              ? preloaded?.activos
              : data?.activos_2022?.['#title']
              ? preloaded?.activos_2022
              : preloaded?.activos_2023,
            required:
              data?.activos?.['#required'] ??
              data?.activos_2022?.['#required'] ??
              data?.activos_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.pasivos?.['#title'] ??
            data?.pasivos_2022?.['#title'] ??
            data?.pasivos_2023?.['#title']
          }
          type={
            data?.pasivos?.['#type'] ??
            data?.pasivos_2022?.['#type'] ??
            data?.pasivos_2023?.['#type']
          }
          placeholder={`${data?.pasivos?.['#title'] ?? ''}${
            data?.pasivos_2022?.['#title'] ?? ''
          }${data?.pasivos_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`pasives${nameFieldYear}`] ? true : false}
          {...formDirective(`pasives${nameFieldYear}`, {
            value: data?.pasivos?.['#title']
              ? preloaded?.pasivos
              : data?.pasivos_2022?.['#title']
              ? preloaded?.pasivos_2022
              : preloaded?.pasivos_2023,
            required:
              data?.pasivos?.['#required'] ??
              data?.pasivos_2022?.['#required'] ??
              data?.pasivos_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.patrimonio?.['#title'] ??
            data?.patrimonio_2022?.['#title'] ??
            data?.patrimonio_2023?.['#title']
          }
          type={
            data?.patrimonio?.['#type'] ??
            data?.patrimonio_2022?.['#type'] ??
            data?.patrimonio_2023?.['#type']
          }
          placeholder={`${data?.patrimonio?.['#title'] ?? ''}${
            data?.patrimonio_2022?.['#title'] ?? ''
          }${data?.patrimonio_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`patrimony${nameFieldYear}`] ? true : false}
          {...formDirective(`patrimony${nameFieldYear}`, {
            value: data?.patrimonio?.['#title']
              ? preloaded?.patrimonio
              : data?.patrimonio_2022?.['#title']
              ? preloaded?.patrimonio_2022
              : preloaded?.patrimonio_2023,
            required:
              data?.patrimonio?.['#required'] ??
              data?.patrimonio_2022?.['#required'] ??
              data?.patrimonio_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.ventas?.['#title'] ??
            data?.ventas_2022?.['#title'] ??
            data?.ventas_2023?.['#title']
          }
          type={
            data?.ventas?.['#type'] ??
            data?.ventas_2022?.['#type'] ??
            data?.ventas_2023?.['#type']
          }
          placeholder={`${data?.ventas?.['#title'] ?? ''}${
            data?.ventas_2022?.['#title'] ?? ''
          }${data?.ventas_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`sells${nameFieldYear}`] ? true : false}
          {...formDirective(`sells${nameFieldYear}`, {
            value: data?.ventas?.['#title']
              ? preloaded?.ventas
              : data?.ventas_2022?.['#title']
              ? preloaded?.ventas_2022
              : preloaded?.ventas_2023,
            required:
              data?.ventas?.['#required'] ??
              data?.ventas_2022?.['#required'] ??
              data?.ventas_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.exportaciones?.['#title'] ??
            data?.exportaciones_2022?.['#title'] ??
            data?.exportaciones_2023?.['#title']
          }
          type={
            data?.exportaciones?.['#type'] ??
            data?.exportaciones_2022?.['#type'] ??
            data?.exportaciones_2023?.['#type']
          }
          placeholder={`${data?.exportaciones?.['#title'] ?? ''}${
            data?.exportaciones_2022?.['#title'] ?? ''
          }${data?.exportaciones_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`exports${nameFieldYear}`] ? true : false}
          {...formDirective(`exports${nameFieldYear}`, {
            value: data?.exportaciones?.['#title']
              ? preloaded?.exportaciones
              : data?.exportaciones_2022?.['#title']
              ? preloaded?.exportaciones_2022
              : preloaded?.exportaciones_2023,
            required:
              data?.exportaciones?.['#required'] ??
              data?.exportaciones_2022?.['#required'] ??
              data?.exportaciones_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.importaciones?.['#title'] ??
            data?.importaciones_2022?.['#title'] ??
            data?.importaciones_2023?.['#title']
          }
          type={
            data?.importaciones?.['#type'] ??
            data?.importaciones_2022?.['#type'] ??
            data?.importaciones_2023?.['#type']
          }
          placeholder={`${data?.importaciones?.['#title'] ?? ''}${
            data?.importaciones_2022?.['#title'] ?? ''
          }${data?.importaciones_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`imports${nameFieldYear}`] ? true : false}
          {...formDirective(`imports${nameFieldYear}`, {
            value: data?.importaciones?.['#title']
              ? preloaded?.importaciones
              : data?.importaciones_2022?.['#title']
              ? preloaded?.importaciones_2022
              : preloaded?.importaciones_2023,
            required:
              data?.importaciones?.['#required'] ??
              data?.importaciones_2022?.['#required'] ??
              data?.importaciones_2023?.['#required'],
          })}
        />
        <Input
          label={
            data?.utilidades?.['#title'] ??
            data?.utilidades_2022?.['#title'] ??
            data?.utilidades_2023?.['#title']
          }
          type={
            data?.utilidades?.['#type'] ??
            data?.utilidades_2022?.['#type'] ??
            data?.utilidades_2023?.['#type']
          }
          placeholder={`${data?.utilidades?.['#title'] ?? ''}${
            data?.utilidades_2022?.['#title'] ?? ''
          }${data?.utilidades_2023?.['#title'] ?? ''}...`}
          hasError={errors?.[`utilities${nameFieldYear}`] ? true : false}
          {...formDirective(`utilities${nameFieldYear}`, {
            value: data?.utilidades?.['#title']
              ? preloaded?.utilidades
              : data?.utilidades_2022?.['#title']
              ? preloaded?.utilidades_2022
              : preloaded?.utilidades_2023,
            required:
              data?.utilidades?.['#required'] ??
              data?.utilidades_2022?.['#required'] ??
              data?.utilidades_2023?.['#required'],
          })}
        />
      </div>
    </div>
  )
}

export default SingleYearFinancialForm
