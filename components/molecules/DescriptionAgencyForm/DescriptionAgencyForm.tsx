import Input from '@atoms/Input/Input'
import Tooltip from '@atoms/Tooltip/Tooltip'
import { DescripcionDelProyecto } from '@models/getForms.model'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const DescriptionAgencyForm = ({ data, errors, formDirective }: FormProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ position: 'relative' }}>
        <h3>{data?.['#title']}</h3>
        <Tooltip
          tooltipLabel='Describa brevemente cuáles son los productos o servicios que ofrece la empresa, a qué sector económico corresponde y por cuánto tiempo ha desarrollado estas actividades.'
          closePosition
        />
      </div>
      <Input
        label={data?.descripcion?.['#title'] ?? ''}
        type={data?.descripcion?.['#type'] ?? 'text'}
        placeholder={`${data?.descripcion?.['#title']}...`}
        hasError={errors?.descriptionCompanyAgency ? true : false}
        {...formDirective('descriptionCompanyAgency', {
          required: data?.descripcion?.['#required'],
        })}
      />
      <div style={{ position: 'relative' }}>
        <h3>{data?.descripcionl_proyecto_participa?.['#title']}</h3>
        <Tooltip
          tooltipLabel='Describa detalladamente la iniciativa con la que desea participar'
          closePosition
        />
      </div>
      <Input
        label={
          data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
            '#title'
          ] ?? ''
        }
        type={
          data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.[
            '#type'
          ] ?? 'text'
        }
        placeholder={`${data?.descripcionl_proyecto_participa?.de_que_trata_el_proyecto?.['#title']}...`}
        hasError={errors?.descriptionAboutAgency ? true : false}
        {...formDirective('descriptionAboutAgency', {
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
          ] ?? 'text'
        }
        placeholder={`${data?.descripcionl_proyecto_participa?.cobertura_alcance_proyecto?.['#title']}...`}
        hasError={errors?.descriptionCoverageAgency ? true : false}
        {...formDirective('descriptionCoverageAgency', {
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
          ] ?? 'text'
        }
        placeholder={`${data?.descripcionl_proyecto_participa?.tiempo_desarrollado_proyecto?.['#title']}...`}
        hasError={errors?.descriptionTimeAgency ? true : false}
        {...formDirective('descriptionTimeAgency', {
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
          ] ?? 'text'
        }
        placeholder={`${data?.descripcionl_proyecto_participa?.indicadores_de_gestion?.['#title']}...`}
        tooltipLabel='Número de personas, usuarios o comunidades impactadas, niveles de satisfacción, volument de ventas, entre otros'
        hasError={errors?.descriptionIndicatorsAgency ? true : false}
        {...formDirective('descriptionIndicatorsAgency', {
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
          ] ?? 'text'
        }
        placeholder={`${data?.descripcionl_proyecto_participa?.por_que_proyecto_premiado?.['#title']}...`}
        hasError={errors?.descriptionReasonAgency ? true : false}
        {...formDirective('descriptionReasonAgency', {
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
