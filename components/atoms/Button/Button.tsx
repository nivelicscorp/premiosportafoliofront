import { ButtonModel } from '@models/button.model'
import style from '@styles/scss/atoms/buttons.module.scss'

interface ButtonProps extends Omit<ButtonModel, 'url'> {
  disabled?: boolean
  clickHandler?: () => void
}

const Button = ({ title, variant, disabled, clickHandler }: ButtonProps) => {
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
        >
          {title}
        </button>
      )}
    </>
  )
}

export default Button
