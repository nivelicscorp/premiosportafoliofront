import Tooltip from '@atoms/Tooltip/Tooltip'
import styles from '@styles/scss/atoms/inputs.module.scss'
import { forwardRef, useState } from 'react'

interface InputProps {
  label?: string
  smallLabel?: string
  required?: boolean
  placeholder?: string
  type: string
  disabled?: boolean
  options?: string[]
  errorMessage?: string | boolean
  tooltip?: string
  tooltipLabel?: string
  name: string
  onChange?: (event: any) => void
  onBlur?: (event: any) => void
}

const Input = forwardRef<any, InputProps>(function Render(
  this: any,
  {
    type,
    name,
    label,
    smallLabel,
    required = true,
    placeholder,
    disabled,
    options,
    errorMessage,
    tooltip,
    tooltipLabel,
    onChange,
    onBlur,
  },
  ref
) {
  const [focus, setFocus] = useState(false)
  const [typeField, setTypeField] = useState(type)
  return (
    <div className={styles.inputContainer}>
      {type !== 'checkbox' && type !== 'radio' && (
        <label
          htmlFor={`field-${name}`}
          className={
            focus
              ? styles.active
              : '' || errorMessage
              ? styles.error
              : '' || disabled
              ? styles.disabled
              : ''
          }
        >
          {label} <span>{smallLabel}</span>
          {tooltipLabel && (
            <Tooltip tooltipLabel={tooltipLabel} closePosition={true} />
          )}
        </label>
      )}
      {type === 'select' ? (
        <select
          ref={ref}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          ref={ref}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div className={styles.checkbox}>
          <input
            id={`field-${name}`}
            ref={ref}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            value={label}
            onChange={onChange}
          />
          <div dangerouslySetInnerHTML={{ __html: label ?? '' }} />
          {tooltip && <Tooltip tooltipLabel={tooltip} closePosition={false} />}
        </div>
      ) : type === 'password' ? (
        <>
          <input
            id={`field-${name}`}
            ref={ref}
            name={name}
            placeholder={disabled ? '' : placeholder}
            disabled={disabled}
            className={
              errorMessage
                ? styles.error
                : '' || disabled
                ? styles.disabled
                : ''
            }
            onFocus={(e) => setFocus(true)}
            onBlur={(e) => setFocus(false)}
            onChange={onChange}
            type={typeField}
          />
          <button
            type='button'
            className={styles.insideButton}
            onClick={() =>
              setTypeField(typeField === 'password' ? 'text' : 'password')
            }
          >
            {typeField === 'password' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='23.999'
                height='17.209'
                className={styles.main}
                viewBox='0 0 23.999 17.209'
              >
                <path
                  id='Unión_51'
                  data-name='Unión 51'
                  d='M7.075,17.159a.374.374,0,0,1-.138-.512L16.439.188a.375.375,0,1,1,.65.374l-9.5,16.459a.375.375,0,0,1-.512.137ZM9,16.265l.018-.03,1.108-1.919A6,6,0,0,0,16,4.144l1.368-2.37A13.708,13.708,0,0,1,23.854,8a1.353,1.353,0,0,1,0,1.217A13.342,13.342,0,0,1,12,16.613,13.018,13.018,0,0,1,9,16.265Zm-2.079-.681A13.653,13.653,0,0,1,.145,9.221a1.352,1.352,0,0,1,0-1.216A13.341,13.341,0,0,1,12,.613a12.981,12.981,0,0,1,3.212.4L14.076,2.982A6,6,0,0,0,8.162,13.226L7.074,15.11a1.117,1.117,0,0,0-.148.472h0Zm4.25-3.076,3.8-6.577a3.991,3.991,0,0,1-2.964,6.665A4.044,4.044,0,0,1,11.175,12.507ZM9.2,11.434A4,4,0,0,1,8.158,7.558a1.994,1.994,0,0,0,2.787-2.787A3.939,3.939,0,0,1,12,4.613h.011a4.007,4.007,0,0,1,1.044.139L9.2,11.434h0Z'
                  transform='translate(0 0)'
                  fill='#a0a0a0'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='16'
                className={styles.disabled}
                viewBox='0 0 24 16'
              >
                <path
                  id='Icon_awesome-eye'
                  data-name='Icon awesome-eye'
                  d='M23.855,11.892A13.364,13.364,0,0,0,12,4.5,13.366,13.366,0,0,0,.145,11.892a1.348,1.348,0,0,0,0,1.216A13.364,13.364,0,0,0,12,20.5a13.366,13.366,0,0,0,11.855-7.392A1.348,1.348,0,0,0,23.855,11.892ZM12,18.5a6,6,0,1,1,6-6A6,6,0,0,1,12,18.5Zm0-10a3.971,3.971,0,0,0-1.055.158,1.994,1.994,0,0,1-2.788,2.788A3.991,3.991,0,1,0,12,8.5Z'
                  transform='translate(0 -4.5)'
                  fill='#a0a0a0'
                />
              </svg>
            )}
          </button>
        </>
      ) : (
        <input
          id={`field-${name}`}
          ref={ref}
          name={name}
          placeholder={disabled ? '' : placeholder}
          disabled={disabled}
          className={
            errorMessage ? styles.error : '' || disabled ? styles.disabled : ''
          }
          onFocus={(e) => setFocus(true)}
          onBlur={(e) => setFocus(false)}
          onChange={onChange}
          type={type}
        />
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
})

export default Input
