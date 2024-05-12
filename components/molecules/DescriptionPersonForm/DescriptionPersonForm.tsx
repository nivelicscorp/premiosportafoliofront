import Input from '@atoms/Input/Input'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}

const DescriptionPersonForm = ({ formDirective }: FormProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h3>Ampliar información</h3>
      <Input
        label='Empresa / Universidad'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonCompany')}
      />
      <Input
        label='Descripción del perfil'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonProfile')}
      />
      <Input
        label='Impacto en su gestión'
        type='textarea'
        tooltipLabel='Antes y después, cumplimiento de objectivos, fomentar cambios positivos, participación en proyectos en la universidad o empresas, entre otros.'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonImpact')}
      />
      <Input
        label='Tiempo de cuánto lleva en la compañia / Universidad'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonTime')}
      />
      <Input
        label='Indicadores de su gestión'
        type='textarea'
        tooltipLabel='Cifras, resultados, premios, reconocimientos, entre otros.'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonIndicators')}
      />
      <Input
        label='¿Cuál considera que es la razón para ganar?'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonReason')}
      />
      <Input
        label='Otros'
        smallLabel='(Investifaciones o publicaciones)'
        type='textarea'
        placeholder='Escriba aquí...'
        {...formDirective('descriptionPersonOthers')}
      />
    </div>
  )
}

export default DescriptionPersonForm
