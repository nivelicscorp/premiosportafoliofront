import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <BtnFloat />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Home
