import LinkButton from '@atoms/LinkButton/LinkButton'
import ProfileData from '@molecules/ProfileData/ProfileData'
import { GetServerSideProps } from 'next'

const index = () => {
  return (
    <>
      <ProfileData />
      <div style={{ width: '300px' }}>
        <LinkButton
          title='Volver'
          url='/usuario'
          target={'_self'}
          variant={'primary'}
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default index
