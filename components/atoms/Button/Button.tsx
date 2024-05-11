import { ButtonModel } from '@models/button.model'
import style from '@styles/scss/atoms/buttons.module.scss'

interface ButtonProps extends Omit<ButtonModel, 'url'> {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  clickHandler?: () => void
}

const Button = ({
  title,
  variant,
  disabled,
  type = 'submit',
  clickHandler,
}: ButtonProps) => {
  return (
    <>
      {variant === 'primary' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            style.linkBtn__primary +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {title}
        </button>
      )}
      {variant === 'secondary' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            style.linkBtn__secondary +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {title}
        </button>
      )}
      {variant === 'prev' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            style.linkBtn__prev +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {`< ${title}`}
        </button>
      )}
      {variant === 'next' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            style.linkBtn__prev +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {`${title} >`}
        </button>
      )}
    </>
  )
}

export default Button
