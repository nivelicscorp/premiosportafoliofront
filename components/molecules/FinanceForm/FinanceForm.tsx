import { DescripcionDelProyecto } from '@models/getForms.model'
import { PostFormAgency } from '@models/postFormAgency.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import SingleYearFinancialForm from '@molecules/SingleYearFinancialForm/SingleYearFinancialForm'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  data: DescripcionDelProyecto
  formDirective: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  preloaded: PostFormCompany
}
const FinanceForm = ({ data, errors, formDirective, preloaded }: FormProps) => {
  return (
    <div className='form'>
      <h3
        dangerouslySetInnerHTML={{ __html: data?.markup_02?.['#markup'] ?? '' }}
        className='form-title step-5'
      ></h3>
      <SingleYearFinancialForm
        data={data?.ano_2021}
        nameFieldYear='TwentyOne'
        formDirective={formDirective}
        errors={errors}
        preloaded={preloaded}
      />
      <SingleYearFinancialForm
        data={data?.ano_2022}
        nameFieldYear='TwentyTwo'
        formDirective={formDirective}
        errors={errors}
        preloaded={preloaded}
      />
      <SingleYearFinancialForm
        data={data?.ano_2023}
        nameFieldYear='TwentyThree'
        formDirective={formDirective}
        errors={errors}
        preloaded={preloaded}
      />
    </div>
  )
}

export default FinanceForm
