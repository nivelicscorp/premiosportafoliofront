import SingleYearFinancialForm from '@molecules/SingleYearFinancialForm/SingleYearFinancialForm'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormProps {
  formDirective: UseFormRegister<FieldValues>
}
const FinanceForm = ({ formDirective }: FormProps) => {
  return (
    <div className='form'>
      <h3 className='form-title step-5'>Información sujeta a validación:</h3>
      <SingleYearFinancialForm
        year='2021'
        nameFieldYear='TwentyOne'
        formDirective={formDirective}
      />
      <SingleYearFinancialForm
        year='2022'
        nameFieldYear='TwentyTwo'
        formDirective={formDirective}
      />
      <SingleYearFinancialForm
        year='2023'
        nameFieldYear='TwentyThree'
        formDirective={formDirective}
      />
    </div>
  )
}

export default FinanceForm
