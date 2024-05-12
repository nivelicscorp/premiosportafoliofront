import Button from '@atoms/Button/Button'
import StepButton from '@atoms/StepButton/StepButton'
import CategoryForm from '@molecules/CategoryForm/CategoryForm'
import RegisterAgencyInfoForm from '@molecules/RegisterAgencyInfoForm/RegisterAgencyInfoForm'
import RegisterCompanyInfoForm from '@molecules/RegisterCompanyInfoForm/RegisterCompanyInfoForm'
import RegisterPersonExperienceForm from '@molecules/RegisterPersonExperienceForm/RegisterPersonExperienceForm'
import RegisterPersonInfoForm from '@molecules/RegisterPersonInfoForm/RegisterPersonInfoForm'
import RegisterPersonStudiesForm from '@molecules/RegisterPersonStudiesForm/RegisterPersonStudiesForm'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const PostulationForm = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  /**
   * Get the user data from the cookies and set the Role
   */
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      setRole(userDataParsed?.current_user?.role ?? '')
    }
    decypherData()
  }, [])

  /**
   * Form hook to handle the form data
   */
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm()
  /**
   * Function to change the step of the form
   * @param step - Step to change
   * @returns void
   */
  const changeStep = (step: number) => {
    if (
      step <= 0 ||
      (step === 5 && category !== 'Esfuerzo exportador') ||
      (step > 5 && category === 'Esfuerzo exportador')
    ) {
      return
    }
    setStep(step)
  }
  /**
   * Watch the category to show the step 5 if the category is 'Esfuerzo exportador'
   */
  const category = watch('category')
  /**
   * Function to send the data to the backend
   * @param data - Data to send to the backend
   */
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log('data', data)
  }

  return (
    <div
      style={{
        width: '1200px',
        margin: '50px auto',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
      }}
    >
      <h1>Formulario de inscripción</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <StepButton stepNumber={1} onClick={() => changeStep(1)} />
        <StepButton stepNumber={2} onClick={() => changeStep(2)} />
        <StepButton stepNumber={3} onClick={() => changeStep(3)} />
        <StepButton stepNumber={4} onClick={() => changeStep(4)} />
        {category === 'Esfuerzo exportador' && (
          <StepButton stepNumber={5} onClick={() => changeStep(5)} />
        )}
      </div>
      <form style={{ padding: '20px' }} onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <CategoryForm role={role} formDirective={register} />}
        {step === 2 && role === 'empresa' && (
          <RegisterCompanyInfoForm formDirective={register} />
        )}
        {step === 2 && role === 'persona' && (
          <>
            <RegisterPersonInfoForm formDirective={register} />
            <RegisterPersonStudiesForm
              formDirective={register}
              setValue={setValue}
            />
            <RegisterPersonExperienceForm
              formDirective={register}
              setValue={setValue}
            />
          </>
        )}
        {step === 2 && role === 'agencia' && (
          <RegisterAgencyInfoForm formDirective={register} />
        )}
        {step === 3 && <h2>Paso 3</h2>}
        {step === 4 && <h2>Paso 4</h2>}
        {step === 5 && <h2>Paso 5</h2>}
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            title='Anterior'
            variant='prev'
            disabled={step === 1}
            clickHandler={() => changeStep(step - 1)}
            type='button'
          />
          <Button
            title='Siguiente'
            variant='next'
            disabled={
              (step === 4 && category !== 'Esfuerzo exportador') ||
              (step === 5 && category === 'Esfuerzo exportador')
            }
            clickHandler={() => changeStep(step + 1)}
            type='button'
          />
        </div>
        <button>SAVE</button>
      </form>
    </div>
  )
}

export default PostulationForm
