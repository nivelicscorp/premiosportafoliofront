import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{ pageData: any[] }> = (props) => {
  const parsedData = LandingPageDTO(props.pageData)
  console.log('🚀 ~ parsedData:', parsedData)
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
      pageData,
    },
  }
}

export default Home
