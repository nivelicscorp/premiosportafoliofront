import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage = (props) => {
  console.log('🚀 ~ props:', props)
  return (
    <>
      <BtnFloat />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = await getLandingPage()
  return {
    props: {
      ...pageData,
    },
  }
}

export default Home
