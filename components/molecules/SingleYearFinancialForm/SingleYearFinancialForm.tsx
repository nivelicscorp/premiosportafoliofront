import { FinancialTitle } from '@atoms/FinancialTitle/FinancialTitle'
import Input from '@atoms/Input/Input'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
interface FormProps {
  data: any
  nameFieldYear: string
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const SingleYearFinancialForm = ({
  data,
  nameFieldYear,
  formDirective,
  errors,
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
