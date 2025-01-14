import LinkButton from '@atoms/LinkButton/LinkButton'
import { BestMomentsSectionModel } from '@models/bestMoments.model'
import styles from '@styles/scss/organisms/bestMoments.module.scss'
import { myLoader } from '@utils/customLoaderImages'
import Image from 'next/image'
import { Fragment } from 'react'

interface BestMomentsSectionProps {
  data: BestMomentsSectionModel
}

const BestMomentsSection = ({ data }: BestMomentsSectionProps) => {
  return (
    <div className={styles.bestMoments}>
      <div className={styles.bestMoments__container}>
        <div className={styles.logo}>
          <Image
            loader={myLoader}
            src={data?.logo?.source}
            height={200}
            width={150}
            alt={data?.logo?.alt}
            title={data?.logo?.title}
          />
        </div>
        <h2 className={styles.title}>{data?.title}</h2>
        <div className={styles.buttons}>
          {data?.button?.map((button, index) => (
            <Fragment key={index}>
              <LinkButton
                title={button.title}
                url={button.url}
                variant={button.variant}
                target='_blank'
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.bestMoments__imgDesktop}>
        <Image
          loader={myLoader}
          src={data?.backgroundDesktop?.source}
          height={176}
          width={1200}
          alt={data?.backgroundDesktop?.alt}
          title={data?.backgroundDesktop?.title}
        />
      </div>
      <div className={styles.bestMoments__imgMobile}>
        <Image
          loader={myLoader}
          src={data?.backgroundMobile?.source}
          width={340}
          height={575}
          alt={data?.backgroundMobile?.alt}
          title={data?.backgroundMobile?.title}
        />
      </div>
    </div>
  )
}

export default BestMomentsSection
