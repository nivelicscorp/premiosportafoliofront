import Input from '@atoms/Input/Input'
import Tooltip from '@atoms/Tooltip/Tooltip'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const DescriptionAgencyForm = ({ formDirective }: FormProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ position: 'relative' }}>
        <h3>Descripción de producto/servicios</h3>
        <Tooltip
          tooltipLabel='Describa brevemente cuáles son los productos o servicios que ofrece la empresa, a qué sector económico corresponde y por cuánto tiempo ha desarrollado estas actividades.'
          closePosition
        />
      </div>
      <Input
        label='Descripción'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionCompanyAgency')}
      />
      <div style={{ position: 'relative' }}>
        <h3>Descripción del proyecto con el que participa</h3>
        <Tooltip
          tooltipLabel='Describa detalladamente la iniciativa con la que desea participar'
          closePosition
        />
      </div>
      <Input
        label='¿De qué se trata el proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionAboutAgency')}
      />
      <Input
        label='¿Qué cobertura y alcance tiene el proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionCoverageAgency')}
      />
      <Input
        label='¿Por cuánto tiempo se ha desarrollado este proyecto?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionTimeAgency')}
      />
      <Input
        label='¿Cuáles son los indicadores de gestión?'
        type='textarea'
        placeholder='Escriba aquí...'
        tooltipLabel='Número de personas, usuarios o comunidades impactadas, niveles de satisfacción, volument de ventas, entre otros'
        {...formDirective('descriptionIndicatorsAgency')}
      />
      <Input
        label='¿Por qué creen que este proyecto debe ser premiado?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionReasonAgency')}
      />
    </div>
  )
}

export default DescriptionAgencyForm
