import { DescripcionDelProyecto } from '@models/getForms.model'
import SingleYearFinancialForm from '@molecules/SingleYearFinancialForm/SingleYearFinancialForm'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}
const FinanceForm = ({ data, errors, formDirective }: FormProps) => {
  return (
    <div className='form'>
      <h3 className='form-title step-5'>{data.markup_02?.['#title'] ?? ''}</h3>
      <SingleYearFinancialForm
        data={data.ano_2021}
        nameFieldYear='TwentyOne'
        formDirective={formDirective}
        errors={errors}
      />
      <SingleYearFinancialForm
        data={data.ano_2022}
        nameFieldYear='TwentyTwo'
        formDirective={formDirective}
        errors={errors}
      />
      <SingleYearFinancialForm
        data={data.ano_2023}
        nameFieldYear='TwentyThree'
        formDirective={formDirective}
        errors={errors}
      />
    </div>
  )
}

export default FinanceForm
