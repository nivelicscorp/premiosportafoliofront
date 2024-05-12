import Input from '@atoms/Input/Input'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  role: string
  formDirective: UseFormRegister<FieldValues>
}

const CategoryForm = ({ role, formDirective }: FormProps) => {
  return (
    <div>
      <h3>
        Si quiere realizar el proceso de inscripción como empresa y persona,
        deberá hacer el registro con usuarios diferentes para cada postulación.
      </h3>
      <p>Seleccione la categoría a la que desee postularse:</p>
      {role !== '' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            textAlign: 'left',
          }}
        >
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Esfuerzo exportador'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Innovación'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Transformación digital'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Gestión del recurso humano'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Proteccón al medio ambiente'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Aporte a la comunidad'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Responsabilidad social empresarial'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'persona' && (
            <Input
              type='radio'
              label='Servicio al cliente'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}

          {role !== 'empresa' && (
            <Input
              type='radio'
              label='Mejor docente'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'empresa' && (
            <Input
              type='radio'
              label='Mejor estudiante'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
          {role !== 'empresa' && (
            <Input
              type='radio'
              label='Mejor líder empresarial'
              tooltip='Esto aclara'
              {...formDirective('category')}
            />
          )}
        </div>
      )}
      <ul>
        Nota:
        <li>
          Si durante el proceso de inscripción presenta algún inconveniente, les
          recordamos volver a llenar el formulario desde el Paso 1.
        </li>
        {role === 'empresa' && (
          <li>Una empresa puede inscribir una categoría por cada proyecto.</li>
        )}
      </ul>
    </div>
  )
}

export default CategoryForm
