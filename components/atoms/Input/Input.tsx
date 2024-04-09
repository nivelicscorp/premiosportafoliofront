import { forwardRef } from 'react'

interface InputProps {
  label?: string
  required?: boolean
  placeholder?: string
  type: string
  options?: string[]
  errorMessage?: string | boolean
  name: string
}

const Input = forwardRef<any, InputProps>(function render(
  this: any,
  { type, name, label, required, placeholder, options, errorMessage, ...props },
  ref
) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
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
        <input ref={ref} name={name} placeholder={placeholder} {...props} />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
})

export default Input
