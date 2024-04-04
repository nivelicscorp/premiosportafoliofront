import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const UserPage: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Usuario works</h1>
      <Link href={'/usuario/postulacion'}> Go to postulations </Link>
      <Link href={'/'}> Back to home </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

export default UserPage
