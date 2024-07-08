import Input from '@atoms/Input/Input'
import Tooltip from '@atoms/Tooltip/Tooltip'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { PostFormAgency } from '@models/postFormAgency.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  category: any
  errors: FieldErrors<FieldValues>
  preloaded: PostFormAgency
}

const DescriptionAgencyForm = ({
  data,
  errors,
  category,
  formDirective,
  preloaded,
}: FormProps) => {
  return (
    <div className='form step3'>
      <div className='form-subTitle'>
        <h3>
          {category.includes('persona_')
            ? 'Ampliar información'
            : data?.['#title']}
        </h3>
        {!category.includes('persona_') && (
          <Tooltip
            tooltipLabel={
              'Describa brevemente cuáles son los productos o servicios que ofrece la empresa, a qué sector económico corresponde y por cuánto tiempo ha desarrollado estas actividades.'
            }
            closePosition
          />
        )}
      </div>
      <Input
        label={
          category.includes('persona_')
            ? 'Empresa / Universidad'
            : data?.descripcion?.['#title'] ?? ''
        }
        type={data?.descripcion?.['#type'] ?? 'text'}
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcion?.['#title']
        }...`}
        hasError={errors?.descriptionCompanyAgency ? true : false}
        {...formDirective('descriptionCompanyAgency', {
          value: preloaded?.descripcion === '-' ? '' : preloaded?.descripcion,
          required: data?.descripcion?.['#required'],
        })}
      />
      {!category.includes('persona_') && (
        <div className='form-subTitle'>
          <h3>{data?.descripcionl_proyecto_participa?.['#title']}</h3>
          {/* <Tooltip
            tooltipLabel='Describa detalladamente la iniciativa con la que desea participar'
            closePosition
          /> */}
        </div>
      )}
      <Input
        label={
          category.includes('persona_')
            ? 'Descripción del perfil'
            : data?.descripcionl_proyecto_participa
                ?.cual_es_el_nombre_del_proyecto?.['#title'] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa
            ?.cual_es_el_nombre_del_proyecto?.['#type'] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa
                ?.cual_es_el_nombre_del_proyecto?.['#title']
        }...`}
        hasError={errors?.descriptionAboutAgency ? true : false}
        {...formDirective('descriptionNameProjectAgency', {
          value:
            preloaded?.cual_es_el_nombre_del_proyecto === '-'
              ? ''
              : preloaded?.cual_es_el_nombre_del_proyecto,
          required:
            data?.descripcionl_proyecto_participa
              ?.cual_es_el_nombre_del_proyecto?.['#required'],
        })}
      />
      <Input
        label={
          category.includes('persona_')
            ? 'Impacto en su gestión'
            : data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
                '#title'
              ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
                '#title'
              ]
        }...`}
        hasError={errors?.descriptionAboutAgency ? true : false}
        tooltipLabel={
          category.includes('persona_')
            ? ''
            : 'Describa detalladamente la iniciativa con la que desea participar'
        }
        {...formDirective('descriptionAboutAgency', {
          value:
            preloaded?.de_que_trata_el_proyecto === '-'
              ? ''
              : preloaded?.de_que_trata_el_proyecto,
          required:
            data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          category.includes('persona_')
            ? '¿Cuánto tiempo lleva en la compañia/Universidad?'
            : data?.descripcionl_proyecto_participa
                ?.cobertura_alcance_proyecto?.['#title'] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa
                ?.cobertura_alcance_proyecto?.['#title']
        }...`}
        hasError={errors?.descriptionCoverageAgency ? true : false}
        {...formDirective('descriptionCoverageAgency', {
          value:
            preloaded?.cobertura_alcance_proyecto === '-'
              ? ''
              : preloaded?.cobertura_alcance_proyecto,
          required:
            data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          category.includes('persona_')
            ? 'Indicadores de su gestión'
            : data?.descripcionl_proyecto_participa
                ?.tiempo_desarrollado_proyecto?.['#title'] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.tiempo_desarrollado_proyecto?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa
                ?.tiempo_desarrollado_proyecto?.['#title']
        }...`}
        hasError={errors?.descriptionTimeAgency ? true : false}
        {...formDirective('descriptionTimeAgency', {
          value:
            preloaded?.tiempo_desarrollado_proyecto === '-'
              ? ''
              : preloaded?.tiempo_desarrollado_proyecto,
          required:
            data?.descripcionl_proyecto_participa
              ?.tiempo_desarrollado_proyecto?.['#required'],
        })}
      />
      <Input
        label={
          category.includes('persona_')
            ? '¿Cuál considera que es la razón para ganar?'
            : data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
                '#title'
              ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
                '#title'
              ]
        }...`}
        tooltipLabel={
          category.includes('persona_')
            ? ''
            : 'Indicador con relación a la industria. Si el indicador es propio, explicar por favor.'
        }
        hasError={errors?.descriptionIndicatorsAgency ? true : false}
        {...formDirective('descriptionIndicatorsAgency', {
          value:
            preloaded?.indicadores_de_gestion === '-'
              ? ''
              : preloaded?.indicadores_de_gestion,
          required:
            data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          category.includes('persona_')
            ? 'Otros (Investigaciones o publicaciones)'
            : data?.descripcionl_proyecto_participa
                ?.por_que_proyecto_premiado?.['#title'] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${
          category.includes('persona_')
            ? 'Escriba aquí'
            : data?.descripcionl_proyecto_participa
                ?.por_que_proyecto_premiado?.['#title']
        }...`}
        hasError={errors?.descriptionReasonAgency ? true : false}
        {...formDirective('descriptionReasonAgency', {
          value:
            preloaded?.por_que_proyecto_premiado === '-'
              ? ''
              : preloaded?.por_que_proyecto_premiado,
          required:
            data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.[
              '#required'
            ],
        })}
      />
    </div>
  )
}

export default DescriptionAgencyForm
