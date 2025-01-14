import { ButtonModel } from '@models/button.model'
import style from '@styles/scss/atoms/buttons.module.scss'
import Link from 'next/link'

interface LinkButtonProps extends ButtonModel {
  target: string
}

const LinkButton = ({ title, url, variant, target }: LinkButtonProps) => {
  return (
    <>
      {variant === 'primary' && (
        <Link href={url} passHref>
          <a
            className={style.linkBtn + ' ' + style.linkBtn__primary}
            target={target}
          >
            {title}
          </a>
        </Link>
      )}
      {variant === 'secondary' && (
        <Link href={url} passHref>
          <a
            className={style.linkBtn + ' ' + style.linkBtn__secondary}
            target={target}
          >
            {title}
          </a>
        </Link>
      )}
    </>
  )
}

export default LinkButton
