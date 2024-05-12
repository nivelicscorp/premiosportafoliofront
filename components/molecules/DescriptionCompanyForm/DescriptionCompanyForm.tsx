import Input from '@atoms/Input/Input'
import Tooltip from '@atoms/Tooltip/Tooltip'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const DescriptionCompanyForm = ({ formDirective }: FormProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ position: 'relative' }}>
        <h3>Descripción de producto/servicios de la empresa</h3>
        <Tooltip
          tooltipLabel='Describa brevemente cuáles son los productos o servicios que ofrece la empresa, a qué sector económico corresponde y por cuánto tiempo ha desarrollado estas actividades.'
          closePosition
        />
      </div>
      <Input
        label='Descripción'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionCompanyCompany')}
      />
      <div style={{ position: 'relative' }}>
        <h3>Descripción del proyecto con el que participa</h3>
        <Tooltip
          tooltipLabel='Describa detalladamente la iniciativa con la que desea participar'
          closePosition
        />
      </div>
      <Input
        label='¿Cuál es el nombre del proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionNameCompany')}
      />
      <Input
        label='¿De qué se trata el proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionAboutCompany')}
      />
      <Input
        label='¿Qué cobertura, alcance y/o impacto tiene el proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionCoverageCompany')}
      />
      <Input
        label='¿Por cuánto tiempo se ha desarrollado este proyecto en Colombia?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionTimeCompany')}
      />
      <Input
        label='¿Cuáles son los indicadores de gestión del proyecto en Colombia?'
        type='textarea'
        placeholder='Escriba aquí...'
        tooltipLabel='(Indicador con relación a la industria. Si el indicador es propio, explicar por favor).'
        {...formDirective('descriptionIndicatorsCompany')}
      />
      <Input
        label='¿Por qué consideran que este proyecto debe ser premiado?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionReasonCompany')}
      />
    </div>
  )
}

export default DescriptionCompanyForm
