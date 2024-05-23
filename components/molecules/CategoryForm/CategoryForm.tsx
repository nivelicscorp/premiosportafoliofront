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
                  data?.categoria?.['#options']?.empresa_esfuerzo_exportador
                }
                value='empresa_esfuerzo_exportador'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={data?.categoria?.['#options']?.empresa_innovacion}
                value='empresa_innovacion'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.empresa_transformacion_digital
                }
                value='empresa_transformacion_digital'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']
                    ?.empresa_gestion_del_recurso_humano
                }
                value='empresa_gestion_del_recurso_humano'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']
                    ?.empresa_proteccion_al_medio_ambiente
                }
                value='empresa_proteccion_al_medio_ambiente'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.empresa_aporte_a_la_comunidad
                }
                value='empresa_aporte_a_la_comunidad'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']
                    ?.empresa_responsabilidad_social_empresarial
                }
                value='empresa_responsabilidad_social_empresarial'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'persona' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.empresa_servicio_al_cliente
                }
                value='empresa_servicio_al_cliente'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={data?.categoria?.['#options']?.persona_mejor_docente}
                value='persona_mejor_docente'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={data?.categoria?.['#options']?.persona_mejor_estudiante}
                value='persona_mejor_estudiante'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
                {...formDirective('category', { required: true })}
                rounded
              />
            )}
            {role !== 'empresa' && (
              <Input
                type='radio'
                label={
                  data?.categoria?.['#options']?.persona_mejor_lider_empresarial
                }
                value='persona_mejor_lider_empresarial'
                tooltip='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
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
