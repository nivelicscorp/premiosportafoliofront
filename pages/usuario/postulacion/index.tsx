import PostulationForm from '@organisms/PostulationForm/PostulationForm'
import { GetServerSideProps } from 'next'

const PostulationPage = () => {
  return (
    <>
      <PostulationForm />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}

export default PostulationPage
