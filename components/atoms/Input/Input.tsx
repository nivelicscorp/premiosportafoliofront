import styles from '@styles/scss/atoms/inputs.module.scss'
import { forwardRef, useState } from 'react'

interface InputProps {
  label?: string
  required?: boolean
  placeholder?: string
  type: string
  disabled?: boolean
  options?: string[]
  errorMessage?: string | boolean
  name: string
}

const Input = forwardRef<any, InputProps>(function Render(
  this: any,
  {
    type,
    name,
    label,
    required,
    placeholder,
    disabled,
    options,
    errorMessage,
    ...props
  },
  ref
) {
  const [focus, setFocus] = useState(false)
  return (
    <div className={styles.inputContainer}>
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
        {label} {required && '*'}
      </label>
      {type === 'select' ? (
        <select ref={ref} name={name} placeholder={placeholder} {...props}>
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
          placeholder={placeholder}
          {...props}
        ></textarea>
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
          type={type}
        />
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
})

export default Input
