import Input from '@atoms/Input/Input'
import Tooltip from '@atoms/Tooltip/Tooltip'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  watch: any
  errors: FieldErrors<FieldValues>
  preloaded: PostFormCompany
}

const DescriptionCompanyForm = ({
  data,
  errors,
  watch,
  formDirective,
  preloaded,
}: FormProps) => {
  return (
    <div className='form step3'>
      <div className='form-subTitle'>
        <h3>
          {data?.descripcion_de_producto_servicios_de_la_empresa?.['#title']}
        </h3>
        <Tooltip
          tooltipLabel='Describa brevemente cuáles son los productos o servicios que ofrece la empresa, a qué sector económico corresponde y por cuánto tiempo ha desarrollado estas actividades.'
          closePosition
        />
      </div>
      <Input
        label={
          data?.descripcion_de_producto_servicios_de_la_empresa
            ?.descripcion_de_producto_servicio?.['#title'] ?? ''
        }
        type={
          data?.descripcion_de_producto_servicios_de_la_empresa
            ?.descripcion_de_producto_servicio?.['#type'] ?? ''
        }
        placeholder='Escriba aquí...'
        watch={watch}
        hasError={errors?.descriptionCompanyCompany ? true : false}
        {...formDirective('descriptionCompanyCompany', {
          value: preloaded?.descripcion_de_producto_servicio,
          required:
            data?.descripcion_de_producto_servicios_de_la_empresa
              ?.descripcion_de_producto_servicio?.['#required'],
          maxLength: 2500,
        })}
      />
      <div className='form-subTitle'>
        <h3>{data?.descripcionl_proyecto_participa?.['#title']}</h3>
        <Tooltip
          tooltipLabel='Describa detalladamente la iniciativa con la que desea participar'
          closePosition
        />
      </div>
      <Input
        label={
          data?.descripcionl_proyecto_participa?.nombre_del_proyecto?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.nombre_del_proyecto?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionNameCompany ? true : false}
        {...formDirective('descriptionNameCompany', {
          value: preloaded?.nombre_del_proyecto,
          required:
            data?.descripcionl_proyecto_participa?.nombre_del_proyecto?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionAboutCompany ? true : false}
        {...formDirective('descriptionAboutCompany', {
          value: preloaded?.de_que_trata_el_proyecto,
          required:
            data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionCoverageCompany ? true : false}
        {...formDirective('descriptionCoverageCompany', {
          value: preloaded?.cobertura_alcance_proyecto,
          required:
            data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.descripcionl_proyecto_participa?.tiempo_desarrollado_proyecto?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.tiempo_desarrollado_proyecto?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionTimeCompany ? true : false}
        {...formDirective('descriptionTimeCompany', {
          value: preloaded?.tiempo_desarrollado_proyecto,
          required:
            data?.descripcionl_proyecto_participa
              ?.tiempo_desarrollado_proyecto?.['#required'],
        })}
      />
      <Input
        label={
          data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        tooltipLabel='(Indicador con relación a la industria. Si el indicador es propio, explicar por favor).'
        hasError={errors?.descriptionIndicatorsCompany ? true : false}
        {...formDirective('descriptionIndicatorsCompany', {
          value: preloaded?.indicadores_de_gestion,
          required:
            data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.[
              '#required'
            ],
        })}
      />
      <Input
        label={
          data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.[
            '#type'
          ] ?? ''
        }
        placeholder='Escriba aquí...'
        hasError={errors?.descriptionReasonCompany ? true : false}
        {...formDirective('descriptionReasonCompany', {
          value: preloaded?.por_que_proyecto_premiado,
          required:
            data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.[
              '#required'
            ],
        })}
      />
    </div>
  )
}

export default DescriptionCompanyForm
