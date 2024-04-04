import { GetServerSideProps, NextPage } from 'next'
import BasicSwiper from '@molecules/BasicSwiper/BasicSwiper'
import BasicForm from '@molecules/BasicForm/BasicForm'
import Link from 'next/link'

const TestingPage: NextPage = (props) => {
  return (
    <div>
      <BasicSwiper />
      <BasicForm />
      <Link href='/'>Volver</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default TestingPage
