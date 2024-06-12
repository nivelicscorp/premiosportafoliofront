import {
  getFormsAgencyData,
  getFormsCompanyData,
  getFormsPersonData,
} from '@actions/getFormsData'
import PostulationForm from '@organisms/PostulationForm/PostulationForm'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'
import { GetServerSideProps, NextPage } from 'next'
import { parse } from 'cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  GetAgencyForm,
  GetCompanyForm,
  GetPersonForm,
} from '@models/getForms.model'

const PostulationPage: NextPage<{
  formData: GetPersonForm | GetCompanyForm | GetAgencyForm | undefined
  temporalRole: string | undefined
}> = (props) => {
  const router = useRouter()

  const [role, setRole] = useState('')
  /**
   * Get the user data from the cookies and set the Role
   */
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      // If the user is not the same role as the temporal role, redirect to the dashboard
      if (userDataParsed?.current_user?.role != props.temporalRole) {
        router.back()
        return
      }
      setRole(userDataParsed?.current_user?.role)
    }
    decypherData()
  }, [])
  return (
    <>
      <PostulationForm role={role} formData={props?.formData} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = ctx.req.headers.cookie
  const parsedCookies = parse(cookies || '')
  const temporalRoleCookie = parsedCookies['temp-role']
  let data
  switch (temporalRoleCookie) {
    case 'persona':
      data = await getFormsPersonData()
      break
    case 'empresa':
      data = await getFormsCompanyData()
      break
    case 'agencia':
      data = await getFormsAgencyData()
      break
  }
  return {
    props: {
      formData: data ?? null,
      temporalRole: temporalRoleCookie ?? '',
    },
  }
}

export default PostulationPage
