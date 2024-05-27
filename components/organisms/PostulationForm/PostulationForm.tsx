import styles from '@styles/scss/organisms/postulationForm.module.scss'
import Button from '@atoms/Button/Button'
import StepButton from '@atoms/StepButton/StepButton'
import CategoryForm from '@molecules/CategoryForm/CategoryForm'
import DescriptionAgencyForm from '@molecules/DescriptionAgencyForm/DescriptionAgencyForm'
import DescriptionCompanyForm from '@molecules/DescriptionCompanyForm/DescriptionCompanyForm'
import DescriptionPersonForm from '@molecules/DescriptionPersonForm/DescriptionPersonForm'
import RegisterAgencyInfoForm from '@molecules/RegisterAgencyInfoForm/RegisterAgencyInfoForm'
import RegisterCompanyInfoForm from '@molecules/RegisterCompanyInfoForm/RegisterCompanyInfoForm'
import RegisterPersonExperienceForm from '@molecules/RegisterPersonExperienceForm/RegisterPersonExperienceForm'
import RegisterPersonInfoForm from '@molecules/RegisterPersonInfoForm/RegisterPersonInfoForm'
import RegisterPersonStudiesForm from '@molecules/RegisterPersonStudiesForm/RegisterPersonStudiesForm'
import UploadFilesForm from '@molecules/UploadFilesForm/UploadFilesForm'
import FinanceForm from '@molecules/FinanceForm/FinanceForm'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PostFormPerson } from '@models/postFormPerson.model'
import { PostFormCompany } from '@models/postFormCompany.model'
import { PostFormAgency } from '@models/postFormAgency.model'
import {
  GetAgencyForm,
  GetCompanyForm,
  GetPersonForm,
} from '@models/getForms.model'
import { onFileUpload } from '@utils/uploadFiles'
import postFormPostulation from '@actions/postFormPostulation'
import ConfirmationPostulation from '@molecules/ConfirmationPostulation/ConfirmationPostulation'

interface PostulationFormProps {
  role: string
  formData: GetPersonForm | GetCompanyForm | GetAgencyForm | undefined
}

const PostulationForm = ({ role, formData }: PostulationFormProps) => {
  const [step, setStep] = useState(1)
  const [formsData, setFormsData] = useState<any>(formData)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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
      (step === 5 && category !== 'empresa_esfuerzo_exportador') ||
      (step > 5 && category === 'empresa_esfuerzo_exportador')
    ) {
      return
    }
    setStep(step)
  }
  /**
   * Watch the category to show the step 5 if the category is 'empresa_esfuerzo_exportador'
   */
  const category = watch('category')
  const descriptionCompanyCompany = watch('descriptionCompanyCompany')
  /**
   * Function to send the data to the backend
   * @param data - Data to send to the backend
   */
  const onSubmit: SubmitHandler<any> = async (data) => {
    setSubmitting(true)
    switch (role) {
      case 'empresa':
        sendDataCompany(data)
        break
      case 'persona':
        sendDataPerson(data)
        break
      case 'agencia':
        sendDataAgency(data)
        break
    }
  }

  const sendDataCompany = async (data: any) => {
    const parseData: PostFormCompany = {
      webform_id: 'postulaciones_empresas',
      activos: step === 5 ? data?.activesTwentyOne : '',
      activos_2022: step === 5 ? data?.activesTwentyTwo : '',
      activos_2023: step === 5 ? data?.activesTwentyThree : '',
      archivos: [],
      cargo: data?.laborCompany ?? '',
      categoria: [data?.category],
      celular: data?.celphoneCompany ?? '',
      ciudad_de_residencia: data?.cityCompany ?? '',
      cobertura_alcance_proyecto: data?.descriptionCoverageCompany ?? '',
      correo: data?.corporateEmailCompany ?? '',
      departamento_de_residencia: data?.departmentCompany ?? '',
      direccion: data?.directionCompany ?? '',
      descripcion_de_producto_servicio: data?.descriptionCompanyCompany ?? '',
      de_que_trata_el_proyecto: data?.descriptionAboutCompany ?? '',
      exportaciones: step === 5 ? data?.exportsTwentyOne : '',
      exportaciones_2022: step === 5 ? data?.exportsTwentyTwo : '',
      exportaciones_2023: step === 5 ? data?.exportsTwentyThree : '',
      importaciones: step === 5 ? data?.importsTwentyOne : '',
      importaciones_2022: step === 5 ? data?.importsTwentyTwo : '',
      importaciones_2023: step === 5 ? data?.importsTwentyThree : '',
      indicadores_de_gestion: data?.descriptionIndicatorsCompany ?? '',
      nit: data?.NitCompany ?? '',
      nombre_completo: data?.nameCompany ?? '',
      nombre_del_proyecto: data?.descriptionNameCompany ?? '',
      numero_de_documento: data?.documentIdCompany ?? '',
      pasivos: step === 5 ? data?.pasivesTwentyOne : '',
      pasivos_2022: step === 5 ? data?.pasivesTwentyTwo : '',
      pasivos_2023: step === 5 ? data?.pasivesTwentyThree : '',
      patrimonio: step === 5 ? data?.patrimonyTwentyOne : '',
      patrimonio_2022: step === 5 ? data?.patrimonyTwentyTwo : '',
      patrimonio_2023: step === 5 ? data?.patrimonyTwentyThree : '',
      por_que_proyecto_premiado: data?.descriptionReasonCompany ?? '',
      quien_contactar: data?.whoContactCompany ?? '',
      telefono: data?.phoneCompany ?? '',
      tiempo_desarrollado_proyecto: data?.descriptionTimeCompany ?? '',
      utilidades: step === 5 ? data?.utilitiesTwentyOne : '',
      utilidades_2022: step === 5 ? data?.utilitiesTwentyTwo : '',
      utilidades_2023: step === 5 ? data?.utilitiesTwentyThree : '',
      ventas: step === 5 ? data?.sellsTwentyOne : '',
      ventas_2022: step === 5 ? data?.sellsTwentyTwo : '',
      ventas_2023: step === 5 ? data?.sellsTwentyThree : '',
    }
    const promisesFiles: Promise<any>[] = data?.files.map((element: any) =>
      onFileUpload(element)
    )
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files
      postFormPostulation(parseData)
        .then((res) => {
          if (res?.data?.sid) {
            setSubmitted(true)
          } else {
            setSubmitting(false)
          }
        })
        .catch(() => {
          setSubmitting(false)
        })
    })
  }
  const sendDataPerson = async (data: any) => {
    const parseData: PostFormPerson = {
      webform_id: 'postulaciones',
      archivos: [],
      categoria: [data?.category],
      celular: data?.celphonePerson ?? '',
      ciudad_de_residencia: data?.cityPerson ?? '',
      correo: data?.emailPerson ?? '',
      departamento_de_nacimiento: data?.departmentPerson ?? '',
      departamento_de_residencia: data?.departmentResidencePerson ?? '',
      descripcion_del_perfil: data?.descriptionPersonProfile ?? '',
      empleador: data?.experience ?? [],
      empresa_universidad: data?.descriptionPersonCompany ?? '',
      estudio: data?.studies ?? [],
      fecha: new Date(),
      indicadores_de_su_gestion: data?.descriptionPersonIndicators ?? '',
      info_empresa_universidad: data?.descriptionPersonCompany ?? '',
      impacto_en_su_gestion: data?.descriptionPersonImpact ?? '',
      merece_participar_premios_portafolio: data?.descriptionPersonReason ?? '',
      nombre_completo: data?.namePerson ?? '',
      numero_de_documento: data?.documentIdPerson ?? '',
      otros_investigaciones_publicaciones: data?.descriptionPersonOthers ?? '',
      pais_de_nacimiento: data?.countryPerson ?? '',
      razon_para_ganar: data?.descriptionPersonReason ?? '',
      telefono: data?.phonePerson ?? '',
      tiempo_en_la_compania_universidad: data?.descriptionPersonTime ?? '',
      tipo_de_documento: data?.documentTypePerson ?? '',
      universidad: data?.laborCompany ?? '',
    }
    const promisesFiles: Promise<any>[] = data?.files.map((element: any) =>
      onFileUpload(element)
    )
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files
      postFormPostulation(parseData)
        .then((res) => {
          if (res?.data?.sid) {
            setSubmitted(true)
          } else {
            setSubmitting(false)
          }
        })
        .catch(() => {
          setSubmitting(false)
        })
    })
  }
  const sendDataAgency = async (data: any) => {
    const parseData: PostFormAgency = {
      webform_id: 'postulaciones_agencias',
      archivos: [],
      categoria: [data?.category],
      celular: data?.contactCelphoneAgency ?? '',
      ciudad: data?.cityAgency ?? '',
      cobertura_alcance_proyecto: data?.descriptionCoverageAgency ?? '',
      correo_contacto_agencia: data?.contactEmailAgency ?? '',
      departamento: data?.departmentAgency ?? '',
      descripcion: data?.descriptionCompanyAgency ?? '',
      de_que_trata_el_proyecto: data?.descriptionAboutAgency ?? '',
      indicadores_de_gestion: data?.descriptionIndicatorsAgency ?? '',
      nombre_completo: data?.completeNameAgency ?? '',
      nombre_participante: data?.nameAgency ?? '',
      nombre_representante_agencia: data?.legalRepresentativeAgency ?? '',
      numero_: data?.documentIdAgency ?? '',
      por_que_proyecto_premiado: data?.descriptionReasonAgency ?? '',
      tiempo_desarrollado_proyecto: data?.descriptionTimeAgency ?? '',
      tipo_de_documento: data?.documentTypeAgency ?? '',
    }
    const promisesFiles: Promise<any>[] = data?.files.map((element: any) =>
      onFileUpload(element)
    )
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files
      postFormPostulation(parseData)
        .then((res) => {
          if (res?.data?.sid) {
            setSubmitted(true)
          } else {
            setSubmitting(false)
          }
        })
        .catch(() => {
          setSubmitting(false)
        })
    })
  }

  return (
    <>
      {!submitted && (
        <section className={styles?.inscription}>
          <div className={styles?.inscription__top}>
            <h1>Formulario de inscripción</h1>
          </div>
          {/* TABS */}
          <div
            className={
              styles?.inscription__tabs +
              ' ' +
              (category === 'empresa_esfuerzo_exportador'
                ? styles?.fiveStep
                : '')
            }
          >
            <StepButton
              stepNumber={1}
              active={step === 1}
              onClick={() => changeStep(1)}
              nameStep='Tipo de inscripción'
              conpleted={step > 1}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={2}
              active={step === 2}
              onClick={() => changeStep(2)}
              nameStep='Ingreso de datos'
              conpleted={step > 2}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={3}
              active={step === 3}
              onClick={() => changeStep(3)}
              nameStep='Descripción del proyecto'
              conpleted={step > 3}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={4}
              active={step === 4}
              onClick={() => changeStep(4)}
              nameStep='Documentación Adjunta'
              conpleted={step > 4}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            {category === 'empresa_esfuerzo_exportador' && (
              <StepButton
                stepNumber={5}
                active={step === 5}
                onClick={() => changeStep(5)}
                nameStep='Información financiera'
                conpleted={false}
              />
            )}
          </div>
          <div
            className={
              styles?.inscription__form +
              ' form-content' +
              (role === 'persona' && step === 2 ? ' person' : '')
            }
          >
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              {/* STEP 01 */}
              <section
                className={`${styles.section} ${
                  step === 1 ? styles.active : ''
                }`}
              >
                <CategoryForm
                  data={formsData?.tipo_de_inscripcion}
                  role={role}
                  formDirective={register}
                />
              </section>
              {/* STEP 02 */}
              {role === 'empresa' && (
                <section
                  className={`${styles.section} ${
                    step === 2 ? styles.active : ''
                  }`}
                >
                  <RegisterCompanyInfoForm
                    className='step2'
                    data={formsData?.ingreso_de_datos}
                    errors={errors}
                    formDirective={register}
                  />
                </section>
              )}
              {role === 'persona' && (
                <section
                  className={`${styles.section} ${
                    step === 2 ? styles.active : ''
                  }`}
                >
                  <RegisterPersonInfoForm
                    data={
                      formsData?.ingreso_de_datos?.postulacion_persona_directa
                    }
                    errors={errors}
                    formDirective={register}
                  />
                  <RegisterPersonStudiesForm
                    data={formsData?.ingreso_de_datos?.formacion_academica}
                    formDirective={register}
                    setValue={setValue}
                  />
                  <RegisterPersonExperienceForm
                    data={formsData?.ingreso_de_datos?.experiencia_laboral}
                    formDirective={register}
                    setValue={setValue}
                  />
                </section>
              )}
              {role === 'agencia' && (
                <section
                  className={`${styles.section} ${
                    step === 2 ? styles.active : ''
                  }`}
                >
                  <RegisterAgencyInfoForm
                    data={formsData?.ingreso_de_datos}
                    formDirective={register}
                    errors={errors}
                  />
                </section>
              )}
              {/* STEP 03 */}
              {role === 'empresa' && (
                <section
                  className={`${styles.section} ${
                    step === 3 ? styles.active : ''
                  }`}
                >
                  <DescriptionCompanyForm
                    data={formsData?.descripcion_del_proyecto}
                    errors={errors}
                    watch={descriptionCompanyCompany}
                    formDirective={register}
                  />
                </section>
              )}
              {role === 'persona' && (
                <section
                  className={`${styles.section} ${
                    step === 3 ? styles.active : ''
                  }`}
                >
                  <DescriptionPersonForm
                    data={
                      formsData?.descripcion_del_proyecto.ampliar_informacion
                    }
                    errors={errors}
                    formDirective={register}
                  />
                </section>
              )}
              {role === 'agencia' && (
                <section
                  className={`${styles.section} ${
                    step === 3 ? styles.active : ''
                  }`}
                >
                  <DescriptionAgencyForm
                    data={formsData?.descripcion_del_proyecto}
                    errors={errors}
                    formDirective={register}
                  />
                </section>
              )}
              {/* STEP 04 */}
              <section
                className={`${styles.section} ${
                  step === 4 ? styles.active : ''
                }`}
              >
                <UploadFilesForm
                  data={formsData?.documentacion_adjunta ?? formsData}
                  errors={errors}
                  role={role}
                  formDirective={register}
                  setValue={setValue}
                  className='step4'
                />
              </section>
              {/* STEP 05 */}
              {category === 'empresa_esfuerzo_exportador' && (
                <section
                  className={`${styles.section} ${
                    step === 5 ? styles.active : ''
                  }`}
                >
                  <FinanceForm
                    data={formsData.informacion_financiera}
                    formDirective={register}
                    errors={errors}
                  />
                </section>
              )}
              {/* BUTTONS */}
              <div className={styles?.inscription__btns}>
                <Button
                  title='Anterior'
                  variant='prev'
                  disabled={step === 1}
                  clickHandler={() => changeStep(step - 1)}
                  type='button'
                />
                <Button
                  className={
                    (step === 4 &&
                      category !== 'empresa_esfuerzo_exportador') ||
                    (step === 5 && category === 'empresa_esfuerzo_exportador')
                      ? 'submit'
                      : ''
                  }
                  title={
                    (step === 4 &&
                      category !== 'empresa_esfuerzo_exportador') ||
                    (step === 5 && category === 'empresa_esfuerzo_exportador')
                      ? 'Enviar'
                      : 'Siguiente'
                  }
                  variant={
                    (step === 4 &&
                      category !== 'empresa_esfuerzo_exportador') ||
                    (step === 5 && category === 'empresa_esfuerzo_exportador')
                      ? 'tertiary'
                      : 'next'
                  }
                  clickHandler={
                    (step === 4 &&
                      category !== 'empresa_esfuerzo_exportador') ||
                    (step === 5 && category === 'empresa_esfuerzo_exportador')
                      ? handleSubmit(onSubmit)
                      : () => changeStep(step + 1)
                  }
                  disabled={submitting}
                  type='button'
                />
              </div>
            </form>
          </div>
        </section>
      )}
      {submitted && <ConfirmationPostulation />}
    </>
  )
}

export default PostulationForm
