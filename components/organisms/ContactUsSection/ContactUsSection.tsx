import { ContactUsSectionModel } from '@models/contactUs.model'
import styles from '@styles/scss/organisms/contactUs.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import getImage from '@utils/getImage'

type Props = {
  data: ContactUsSectionModel
  activeRegister: boolean
}

const ContactUsSection = ({ data, activeRegister }: Props) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUs__background + ' ' + styles.desktop}>
        <Image
          src={getImage(data.backgroundDesktop.source)}
          alt={data.backgroundDesktop.alt}
          title={data.backgroundDesktop.title}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className={styles.contactUs__background + ' ' + styles.mobile}>
        <Image
          src={getImage(data.backgroundMobile.source)}
          alt={data.backgroundMobile.alt}
          title={data.backgroundMobile.title}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <h2 className={styles.contactUs__title}>{data.title}</h2>
      <div
        className={styles.contactUs__description}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
      {activeRegister && (
        <Link href={'/registro'} passHref>
          <a className={styles.contactUs__button}>Regístrate aquí</a>
        </Link>
      )}
      <div className={styles.contactUs__auxiliaryImage + ' ' + styles.mobile}>
        <Image
          src={getImage(
            data.auxiliaryImage.source,
            IMAGES.CONTACT.CROP_CONTACT.WIDTH,
            IMAGES.CONTACT.CROP_CONTACT.HEIGHT
          )}
          alt={data.auxiliaryImage.alt}
          title={data.auxiliaryImage.title}
          width={450}
          height={450}
          quality={100}
        />
      </div>
      <div className={styles.contactUs__auxiliaryImage + ' ' + styles.desktop}>
        <Image
          src={getImage(data.auxiliaryImage.source)}
          alt={data.auxiliaryImage.alt}
          title={data.auxiliaryImage.title}
          width={450}
          height={450}
          quality={100}
        />
      </div>
    </section>
  )
}

export default ContactUsSection
