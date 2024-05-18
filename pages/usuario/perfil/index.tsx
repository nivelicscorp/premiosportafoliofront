import LinkButton from '@atoms/LinkButton/LinkButton'
import ProfileData from '@molecules/ProfileData/ProfileData'

const ProfilePage = () => {
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

export default ProfilePage
