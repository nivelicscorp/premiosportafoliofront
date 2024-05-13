import Input from '@atoms/Input/Input'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  year: string
  nameFieldYear: string
  formDirective: UseFormRegister<FieldValues>
}

const SingleYearFinancialForm = ({
  year,
  nameFieldYear,
  formDirective,
}: FormProps) => {
  return (
    <div>
      <h4>Año {year}</h4>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        <Input
          type={'number'}
          label='Activos'
          placeholder='Activos...'
          {...formDirective(`actives${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Pasivos'
          placeholder='Pasivos...'
          {...formDirective(`pasives${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Patrimonio'
          placeholder='Patrimonio...'
          {...formDirective(`patrimony${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Ventas'
          placeholder='Ventas...'
          {...formDirective(`sells${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Exportaciones'
          placeholder='Exportaciones...'
          {...formDirective(`exports${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Importaciones'
          placeholder='Importaciones...'
          {...formDirective(`imports${nameFieldYear}`)}
        />
        <Input
          type={'number'}
          label='Utilidades'
          placeholder='Utilidades...'
          {...formDirective(`utilities${nameFieldYear}`)}
        />
      </div>
    </div>
  )
}

export default SingleYearFinancialForm
