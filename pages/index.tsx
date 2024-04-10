import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <BtnFloat />
      <CategoriesSection />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Home
