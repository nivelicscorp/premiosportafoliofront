import LinkButton from '@atoms/LinkButton/LinkButton'
import MyPostulations from '@organisms/MyPostulations/MyPostulations'

const PostulationsPage = () => {
  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <MyPostulations />
      <LinkButton
        url='/usuario'
        title='Volver'
        target={'_self'}
        variant={'primary'}
      />
    </div>
  )
}

export default PostulationsPage
