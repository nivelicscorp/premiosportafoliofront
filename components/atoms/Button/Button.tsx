import { ButtonModel } from '@models/button.model'
import style from '@styles/scss/atoms/buttons.module.scss'

interface ButtonProps extends Omit<ButtonModel, 'url'> {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  clickHandler?: () => void
  nameStep?: string
  className?: string
  fiveStep?: boolean
}

const Button = ({
  title,
  variant,
  disabled,
  type = 'submit',
  nameStep,
  className,
  fiveStep = false,
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
            ' ' +
            className +
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
            ' ' +
            className +
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
      {variant === 'tertiary' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            className +
            ' ' +
            style.linkBtn__tertiary +
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
            className +
            ' ' +
            style.linkBtn__prev +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {`${title}`}
        </button>
      )}
      {variant === 'next' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            className +
            ' ' +
            style.linkBtn__prev +
            (disabled ? ' ' + style.linkBtn__disabled : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          {`${title}`}
        </button>
      )}
      {variant === 'tab' && (
        <button
          className={
            style.linkBtn +
            ' ' +
            style.linkBtn__tab +
            ' ' +
            className +
            ' ' +
            (disabled ? ' ' + style.linkBtn__disabled : '') +
            ' ' +
            (fiveStep ? ' ' + style?.fiveStep : '')
          }
          onClick={clickHandler}
          disabled={disabled}
          type={type}
        >
          <div className={style.linkBtn__tab__number}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='45.778'
              height='48.194'
              viewBox='0 0 45.778 48.194'
            >
              <g
                id='Grupo_112171'
                data-name='Grupo 112171'
                transform='translate(1.819 1)'
              >
                <path
                  id='Trazado_393965'
                  data-name='Trazado 393965'
                  d='M34.614,32.8a18.808,18.808,0,1,0-26.567-.03A18.786,18.786,0,0,0,34.614,32.8Z'
                  transform='translate(-0.245 -0.711)'
                  fill='#fff'
                  stroke-width='2'
                />
                <circle
                  id='Elipse_1913'
                  data-name='Elipse 1913'
                  cx='14.33'
                  cy='14.33'
                  r='14.33'
                  transform='translate(6.74 4.455)'
                  fill='#fff'
                  stroke-width='2'
                />
                <path
                  id='Trazado_393966'
                  data-name='Trazado 393966'
                  d='M15.737,27.962,9.8,37.052,7.155,31.395.91,31.245l5.941-9.1'
                  transform='translate(-0.91 8.092)'
                  fill='none'
                  stroke-width='2'
                />
                <path
                  id='Trazado_393967'
                  data-name='Trazado 393967'
                  d='M20.272,27.962,26.2,37.052l2.649-5.657,6.245-.15-5.941-9.1'
                  transform='translate(7.043 8.092)'
                  fill='none'
                  stroke-width='2'
                />
              </g>
            </svg>
            <span className={style.linkBtn__tab__title}> {`${title}`} </span>
          </div>
          <span className={style.linkBtn__tab__step}> {nameStep} </span>
        </button>
      )}
    </>
  )
}

export default Button
