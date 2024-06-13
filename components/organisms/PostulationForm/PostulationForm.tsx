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
import { useEffect, useState } from 'react'
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
import patchFormPostulation from '@actions/patchFormPostulation'
import arrayDestructuring from '@utils/arrayDestructuring'

interface PostulationFormProps {
  role: string
  formData: GetPersonForm | GetCompanyForm | GetAgencyForm | undefined
}

const PostulationForm = ({ role, formData }: PostulationFormProps) => {
  const [preloadedData, setPreloadedData] = useState<
    PostFormCompany | PostFormPerson | PostFormAgency | undefined
  >()
  const [sidForm, setSidForm] = useState<string | undefined>()
  // const [tempFiles, setTempFiles] = useState<string[]>([])
  const [alreadyLoadedFiles, setAlreadyLoadedFiles] = useState<string[]>([])
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
    getValues,
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
   * Function to set the sid of the form
   */
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('postulation') ?? '{}')
    const uuid = sessionStorage.getItem('uuid') ?? ''
    setPreloadedData(data)
    setValue('category', arrayDestructuring(data?.categoria, ''))
    setSidForm(uuid)
    // setTempFiles(data?.archivos ?? [])
  }, [])

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
        sendDataCompany(data, true)
        break
      case 'persona':
        sendDataPerson(data, true)
        break
      case 'agencia':
        sendDataAgency(data, true)
        break
    }
  }

  const sendPartialData = () => {
    setSubmitting(false)
    switch (role) {
      case 'empresa':
        sendDataCompany(getValues(), false)
        break
      case 'persona':
        sendDataPerson(getValues(), false)
        break
      case 'agencia':
        sendDataAgency(getValues(), false)
        break
    }
  }

  const sendDataCompany = async (data: any, finalSubmit: boolean) => {
    const parseData: PostFormCompany = {
      webform_id: 'postulaciones_empresas',
      activos: step === 5 ? data?.activesTwentyOne : '',
      activos_2022: step === 5 ? data?.activesTwentyTwo : '',
      activos_2023: step === 5 ? data?.activesTwentyThree : '',
      archivos: [],
      cargo: data?.laborCompany.length > 0 ? data?.laborCompany : '-',
      categoria: [data?.category],
      celular: data?.celphoneCompany.length > 0 ? data?.celphoneCompany : '-',
      ciudad_de_residencia:
        data?.cityCompany.length > 0 ? data?.cityCompany : '-',
      cobertura_alcance_proyecto:
        data?.descriptionCoverageCompany.length > 0
          ? data?.descriptionCoverageCompany
          : '-',
      correo:
        data?.corporateEmailCompany.length > 0
          ? data?.corporateEmailCompany
          : 'temporal@temporal.com',
      departamento_de_residencia:
        data?.departmentCompany.length > 0 ? data?.departmentCompany : '-',
      direccion:
        data?.directionCompany.length > 0 ? data?.directionCompany : '-',
      descripcion_de_producto_servicio:
        data?.descriptionCompanyCompany.length > 0
          ? data?.descriptionCompanyCompany
          : '-',
      de_que_trata_el_proyecto:
        data?.descriptionAboutCompany.length > 0
          ? data?.descriptionAboutCompany
          : '-',
      exportaciones: step === 5 ? data?.exportsTwentyOne : '',
      exportaciones_2022: step === 5 ? data?.exportsTwentyTwo : '',
      exportaciones_2023: step === 5 ? data?.exportsTwentyThree : '',
      importaciones: step === 5 ? data?.importsTwentyOne : '',
      importaciones_2022: step === 5 ? data?.importsTwentyTwo : '',
      importaciones_2023: step === 5 ? data?.importsTwentyThree : '',
      indicadores_de_gestion:
        data?.descriptionIndicatorsCompany.length > 0
          ? data?.descriptionIndicatorsCompany
          : '-',
      nit: data?.NitCompany.length > 0 ? data?.NitCompany : '-',
      nombre_completo: data?.nameCompany.length > 0 ? data?.nameCompany : '-',
      nombre_del_proyecto:
        data?.descriptionNameCompany.length > 0
          ? data?.descriptionNameCompany
          : '-',
      pasivos: step === 5 ? data?.pasivesTwentyOne : '',
      pasivos_2022: step === 5 ? data?.pasivesTwentyTwo : '',
      pasivos_2023: step === 5 ? data?.pasivesTwentyThree : '',
      patrimonio: step === 5 ? data?.patrimonyTwentyOne : '',
      patrimonio_2022: step === 5 ? data?.patrimonyTwentyTwo : '',
      patrimonio_2023: step === 5 ? data?.patrimonyTwentyThree : '',
      por_que_proyecto_premiado:
        data?.descriptionReasonCompany.length > 0
          ? data?.descriptionReasonCompany
          : '-',
      quien_contactar:
        data?.whoContactCompany.length > 0 ? data?.whoContactCompany : '-',
      telefono: data?.phoneCompany.length > 0 ? data?.phoneCompany : '-',
      tiempo_desarrollado_proyecto:
        data?.descriptionTimeCompany.length > 0
          ? data?.descriptionTimeCompany
          : '-',
      utilidades: step === 5 ? data?.utilitiesTwentyOne : '',
      utilidades_2022: step === 5 ? data?.utilitiesTwentyTwo : '',
      utilidades_2023: step === 5 ? data?.utilitiesTwentyThree : '',
      ventas: step === 5 ? data?.sellsTwentyOne : '',
      ventas_2022: step === 5 ? data?.sellsTwentyTwo : '',
      ventas_2023: step === 5 ? data?.sellsTwentyThree : '',
      status: finalSubmit ? 'done' : 'undone',
      complete_page: step.toString(),
    }
    const promisesFiles: Promise<any>[] = finalSubmit
      ? data?.files.map((element: any) => {
          const filePreloaded = preloadedData?.archivos?.find((file) => {
            return file.includes(element.name)
          })
          const file = alreadyLoadedFiles?.find((file) => {
            return file.includes(element.name)
          })
          if (!file && !filePreloaded) {
            return onFileUpload(element)
          }
        })
      : []
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files.length > 0 ? files : ['-']

      // const files: string[] = res.filter((file) => file !== undefined)
      // parseData.archivos =
      //   tempFiles.length > 0 ||
      //   alreadyLoadedFiles.length > 0 ||
      //   files.length > 0
      //     ? [...tempFiles, ...alreadyLoadedFiles, ...files]
      //     : ['-']
      // setAlreadyLoadedFiles([...alreadyLoadedFiles, ...files])
      if (sidForm) {
        patchFormPostulation(parseData, sidForm, role)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      } else {
        postFormPostulation(parseData)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
              setSidForm(res?.data?.sid)
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      }
    })
  }
  const sendDataPerson = async (data: any, finalSubmit: boolean) => {
    const parseData: PostFormPerson = {
      webform_id: 'postulaciones',
      archivos: [],
      categoria: [data?.category],
      celular: data?.celphonePerson?.length > 0 ? data?.celphonePerson : '-',
      ciudad_de_residencia:
        data?.cityPerson?.length > 0 ? data?.cityPerson : '-',
      correo:
        data?.emailPerson?.length > 0
          ? data?.emailPerson
          : 'temporal@temporal.com',
      departamento_de_nacimiento:
        data?.departmentPerson?.length > 0 ? data?.departmentPerson : '-',
      departamento_de_residencia:
        data?.departmentResidencePerson?.length > 0
          ? data?.departmentResidencePerson
          : '-',
      descripcion_del_perfil:
        data?.descriptionPersonProfile?.length > 0
          ? data?.descriptionPersonProfile
          : '-',
      empleador: data?.experience?.length > 0 ? data?.experience : [],
      empresa_universidad:
        data?.descriptionPersonCompany?.length > 0
          ? data?.descriptionPersonCompany
          : '-',
      estudio: data?.studies?.length > 0 ? data?.studies : [],
      fecha: new Date(),
      indicadores_de_su_gestion:
        data?.descriptionPersonIndicators?.length > 0
          ? data?.descriptionPersonIndicators
          : '-',
      info_empresa_universidad:
        data?.descriptionPersonCompany?.length > 0
          ? data?.descriptionPersonCompany
          : '-',
      impacto_en_su_gestion:
        data?.descriptionPersonImpact?.length > 0
          ? data?.descriptionPersonImpact
          : '-',
      merece_participar_premios_portafolio:
        data?.descriptionPersonReason?.length > 0
          ? data?.descriptionPersonReason
          : '-',
      nombre_completo: data?.namePerson?.length > 0 ? data?.namePerson : '-',
      numero_de_documento:
        data?.documentIdPerson?.length > 0 ? data?.documentIdPerson : '-',
      otros_investigaciones_publicaciones:
        data?.descriptionPersonOthers?.length > 0
          ? data?.descriptionPersonOthers
          : '-',
      pais_de_nacimiento:
        data?.countryPerson?.length > 0 ? data?.countryPerson : '-',
      razon_para_ganar:
        data?.descriptionPersonReason?.length > 0
          ? data?.descriptionPersonReason
          : '-',
      telefono: data?.phonePerson?.length > 0 ? data?.phonePerson : '-',
      tiempo_en_la_compania_universidad:
        data?.descriptionPersonTime?.length > 0
          ? data?.descriptionPersonTime
          : '-',
      tipo_de_documento:
        data?.documentTypePerson?.length > 0 ? data?.documentTypePerson : '-',
      universidad: data?.laborCompany?.length > 0 ? data?.laborCompany : '-',
      status: finalSubmit ? 'done' : 'undone',
      complete_page: step.toString(),
    }
    const promisesFiles: Promise<any>[] = data?.files.map((element: any) =>
      onFileUpload(element)
    )
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files.length > 0 ? files : ['-']
      if (sidForm) {
        patchFormPostulation(parseData, sidForm, role)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      } else {
        postFormPostulation(parseData)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
              setSidForm(res?.data?.sid)
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      }
    })
  }
  const sendDataAgency = async (data: any, finalSubmit: boolean) => {
    const parseData: PostFormAgency = {
      webform_id: 'postulaciones_agencias',
      archivos: [],
      categoria: [data?.category],
      celular:
        data?.contactCelphoneAgency.length > 0
          ? data?.contactCelphoneAgency
          : '-',
      ciudad: data?.cityAgency.length > 0 ? data?.cityAgency : '-',
      cobertura_alcance_proyecto:
        data?.descriptionCoverageAgency.length > 0
          ? data?.descriptionCoverageAgency
          : '-',
      correo_contacto_agencia:
        data?.contactEmailAgency.length > 0
          ? data?.contactEmailAgency
          : 'temporal@temporal.com',
      departamento:
        data?.departmentAgency.length > 0 ? data?.departmentAgency : '-',
      descripcion:
        data?.descriptionCompanyAgency.length > 0
          ? data?.descriptionCompanyAgency
          : '-',
      de_que_trata_el_proyecto:
        data?.descriptionAboutAgency.length > 0
          ? data?.descriptionAboutAgency
          : '-',
      indicadores_de_gestion:
        data?.descriptionIndicatorsAgency.length > 0
          ? data?.descriptionIndicatorsAgency
          : '-',
      nombre_completo:
        data?.completeNameAgency.length > 0 ? data?.completeNameAgency : '-',
      nombre_participante: data?.nameAgency.length > 0 ? data?.nameAgency : '-',
      nombre_representante_agencia:
        data?.legalRepresentativeAgency.length > 0
          ? data?.legalRepresentativeAgency
          : '-',
      numero_: data?.documentIdAgency.length > 0 ? data?.documentIdAgency : '-',
      por_que_proyecto_premiado:
        data?.descriptionReasonAgency.length > 0
          ? data?.descriptionReasonAgency
          : '-',
      tiempo_desarrollado_proyecto:
        data?.descriptionTimeAgency.length > 0
          ? data?.descriptionTimeAgency
          : '-',
      tipo_de_documento:
        data?.documentTypeAgency.length > 0 ? data?.documentTypeAgency : '-',
      status: finalSubmit ? 'done' : 'undone',
      complete_page: step.toString(),
    }
    const promisesFiles: Promise<any>[] = data?.files.map((element: any) =>
      onFileUpload(element)
    )
    Promise.all(promisesFiles).then((res) => {
      const files: string[] = res.map((element) => element)
      parseData.archivos = files.length > 0 ? files : ['-']
      if (sidForm) {
        patchFormPostulation(parseData, sidForm, role)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      } else {
        postFormPostulation(parseData)
          .then((res) => {
            if (res?.data?.sid) {
              if (finalSubmit) {
                setSubmitted(true)
              }
              setSidForm(res?.data?.sid)
            } else {
              setSubmitting(false)
            }
          })
          .catch(() => {
            setSubmitting(false)
          })
      }
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
              onClick={() => {
                {
                  changeStep(1)
                  sendPartialData()
                }
              }}
              nameStep='Tipo de inscripción'
              conpleted={step > 1}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={2}
              active={step === 2}
              onClick={() => {
                changeStep(2)
                sendPartialData()
              }}
              nameStep='Ingreso de datos'
              conpleted={step > 2}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={3}
              active={step === 3}
              onClick={() => {
                changeStep(3)
                sendPartialData()
              }}
              nameStep='Descripción del proyecto'
              conpleted={step > 3}
              fiveStep={
                category === 'empresa_esfuerzo_exportador' ? true : false
              }
            />
            <StepButton
              stepNumber={4}
              active={step === 4}
              onClick={() => {
                changeStep(4)
                sendPartialData()
              }}
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
                onClick={() => {
                  changeStep(5)
                  sendPartialData()
                }}
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
                  preloadedCategory={arrayDestructuring(
                    preloadedData?.categoria,
                    ''
                  )}
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
                    preloaded={preloadedData as PostFormCompany}
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
                    preloaded={preloadedData as PostFormPerson}
                  />
                  <RegisterPersonStudiesForm
                    data={formsData?.ingreso_de_datos?.formacion_academica}
                    formDirective={register}
                    setValue={setValue}
                    preloaded={preloadedData as PostFormPerson}
                  />
                  <RegisterPersonExperienceForm
                    data={formsData?.ingreso_de_datos?.experiencia_laboral}
                    formDirective={register}
                    setValue={setValue}
                    preloaded={preloadedData as PostFormPerson}
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
                    preloaded={preloadedData as PostFormAgency}
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
                    preloaded={preloadedData as PostFormCompany}
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
                    preloaded={preloadedData as PostFormPerson}
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
                    preloaded={preloadedData as PostFormAgency}
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
                  // preloaded={tempFiles ?? []}
                  // setTempFiles={setTempFiles}
                />
              </section>
              {/* STEP 05 */}
              {category === 'empresa_esfuerzo_exportador' &&
                role === 'empresa' && (
                  <section
                    className={`${styles.section} ${
                      step === 5 ? styles.active : ''
                    }`}
                  >
                    <FinanceForm
                      data={formsData.informacion_financiera}
                      formDirective={register}
                      errors={errors}
                      preloaded={preloadedData as PostFormCompany}
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
                      : () => {
                          sendPartialData()
                          changeStep(step + 1)
                        }
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
