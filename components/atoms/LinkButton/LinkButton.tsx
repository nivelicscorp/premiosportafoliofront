import { ButtonModel } from '@models/button.model'
import style from '@styles/scss/atoms/buttons.module.scss'
import Link from 'next/link'

interface LinkButtonProps extends ButtonModel {
  target: string
  className?: string
}

const LinkButton = ({
  title,
  url,
  variant,
  target,
  className,
}: LinkButtonProps) => {
  return (
    <>
      {variant === 'primary' && (
        <Link href={url} passHref scroll={false}>
          <a
            className={style.linkBtn + ' ' + style.linkBtn__primary}
            target={target}
          >
            {title}
          </a>
        </Link>
      )}
      {variant === 'secondary' && (
        <Link href={url} passHref scroll={false}>
          <a
            className={style.linkBtn + ' ' + style.linkBtn__secondary}
            target={target}
          >
            {title}
          </a>
        </Link>
      )}
      {variant === 'prev' && (
        <Link href={url} passHref scroll={false}>
          <a
            className={
              style.linkBtn + ' ' + style.linkBtn__prev + ' ' + className
            }
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
