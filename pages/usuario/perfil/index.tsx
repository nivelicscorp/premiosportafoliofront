import LinkButton from '@atoms/LinkButton/LinkButton'
import ProfileData from '@molecules/ProfileData/ProfileData'

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
        />
      </div>
    </div>
  )
}

export default ProfilePage
