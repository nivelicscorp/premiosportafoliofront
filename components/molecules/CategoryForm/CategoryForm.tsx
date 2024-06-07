import Input from '@atoms/Input/Input'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styles from '@styles/scss/molecules/categoryForm.module.scss'

interface FormProps {
  role: string
  formDirective: UseFormRegister<FieldValues>
  data: DescripcionDelProyecto
}

const CategoryForm = ({ data, role, formDirective }: FormProps) => {
  return (
    <div className={styles?.categoryForm}>
      <h3
        className={styles?.categoryForm__title}
        dangerouslySetInnerHTML={{ __html: data?.markup?.['#markup'] ?? '' }}
      />
      {/* FORM */}
      {role !== '' && (
        <form className={styles?.categoryForm__form}>
          <legend>{data?.categoria?.['#title']}</legend>
          <fieldset>
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_esfuerzo_exportador?.split('--')[0]
                }
                value='empresa_esfuerzo_exportador'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_esfuerzo_exportador?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.empresa_innovacion?.split(
                    '--'
                  )[0]
                }
                value='empresa_innovacion'
                tooltip={
                  data?.categoria?.['#options']?.empresa_innovacion?.split(
                    '--'
                  )[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_transformacion_digital?.split('--')[0]
                }
                value='empresa_transformacion_digital'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_transformacion_digital?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_gestion_del_recurso_humano?.split('--')[0]
                }
                value='empresa_gestion_del_recurso_humano'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_gestion_del_recurso_humano?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_proteccion_al_medio_ambiente?.split('--')[0]
                }
                value='empresa_proteccion_al_medio_ambiente'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_proteccion_al_medio_ambiente?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_aporte_a_la_comunidad?.split('--')[0]
                }
                value='empresa_aporte_a_la_comunidad'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_aporte_a_la_comunidad?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_responsabilidad_social_empresarial?.split('--')[0]
                }
                value='empresa_responsabilidad_social_empresarial'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_responsabilidad_social_empresarial?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_servicio_al_cliente?.split('--')[0]
                }
                value='empresa_servicio_al_cliente'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.empresa_servicio_al_cliente?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.persona_mejor_docente?.split(
                    '--'
                  )[0]
                }
                value='persona_mejor_docente'
                tooltip={
                  data?.categoria?.['#options']?.persona_mejor_docente?.split(
                    '--'
                  )[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.persona_mejor_estudiante?.split('--')[0]
                }
                value='persona_mejor_estudiante'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.persona_mejor_estudiante?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.[
                    '#options'
                  ]?.persona_mejor_lider_empresarial?.split('--')[0]
                }
                value='persona_mejor_lider_empresarial'
                tooltip={
                  data?.categoria?.[
                    '#options'
                  ]?.persona_mejor_lider_empresarial?.split('--')[1]
                }
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
          </fieldset>
        </form>
      )}
      {/* NOTE */}
      <div className={styles?.categoryForm__note}>
        <h3 className={styles?.categoryForm__note__title}> Nota: </h3>
        <ul className={styles?.categoryForm__note__list}>
          <li>
            Si durante el proceso de inscripción presenta algún inconveniente,
            les recordamos volver a llenar el formulario desde el
            <span> Paso 1. </span>
          </li>
          {role === 'empresa' && (
            <li>
              Una empresa puede inscribir una categoría por cada proyecto.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default CategoryForm
