import LinkButton from '@atoms/LinkButton/LinkButton'
import ProfileData from '@molecules/ProfileData/ProfileData'
import styles from '@styles/scss/molecules/postulations.module.scss'

const ProfilePage = () => {
  return (
    <div className='form-content'>
      <ProfileData />
      <div>
        <LinkButton
          title='Volver'
          url='/usuario'
          target={'_self'}
          variant={'prev'}
          className={styles?.postulations__prev}
        />
      </div>
    </div>
  )
}

export default ProfilePage
