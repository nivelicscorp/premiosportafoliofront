import LinkButton from '@atoms/LinkButton/LinkButton'
import MyPostulations from '@organisms/MyPostulations/MyPostulations'
import styles from '@styles/scss/molecules/postulations.module.scss'

const PostulationsPage = () => {
  return (
    <div className={styles?.postulationsContent + ' form-content'}>
      <MyPostulations />
      <LinkButton
        url='/usuario'
        title='Volver'
        target={'_self'}
        variant={'prev'}
        className={styles?.postulations__prev}
      />
    </div>
  )
}

export default PostulationsPage
