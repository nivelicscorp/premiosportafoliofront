import { GetServerSideProps } from 'next'
import LoginForm from '@molecules/LoginForm/LoginForm'

const UserPage = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default UserPage
