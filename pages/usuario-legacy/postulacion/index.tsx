import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const PostulationPage: NextPage = () => {
  return (
    <div>
      <h1>Postulations works</h1>
      <Link href='/usuario'>Volver</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default PostulationPage
