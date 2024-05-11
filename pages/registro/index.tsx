import { GetServerSideProps } from 'next'
import RegisterForm from '@molecules/RegisterForm/RegisterForm'

const UserPage = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default UserPage
