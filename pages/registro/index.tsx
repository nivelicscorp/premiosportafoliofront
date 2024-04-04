import { GetServerSideProps, NextPage } from 'next'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const UserPage: NextPage = () => {
  const userData = {
    name: 'John Doe',
    token: '1234567890',
  }
  const router = useRouter()
  setCookie('userData', JSON.stringify(userData))

  const deleteCookieUser = () => {
    deleteCookie('userData')
    router.push('/')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Registro works</h1>
      <button onClick={() => deleteCookieUser()}>Logout</button>
      <Link href='/'>Volver</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default UserPage
