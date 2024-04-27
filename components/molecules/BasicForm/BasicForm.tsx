import { useForm } from 'react-hook-form'
import Input from '@atoms/Input/Input'
import React from 'react'

const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backgroundColor: 'white',
        padding: '1.5rem',
      }}
    >
      <Input
        type='text'
        placeholder='First Name'
        label='First Name'
        {...register('firstName')}
      />
      <Input
        type='textarea'
        placeholder='Text area'
        label='Text area'
        {...register('textarea')}
      />
      <Input
        type='select'
        placeholder='Document type'
        label='Document type'
        options={['CC', 'CE', 'TI', 'PP']}
        {...register('documentType')}
      />
      <Input
        type='text'
        errorMessage={errors.lastName ? 'Last name is required.' : false}
        placeholder='Last Name'
        label='Last Name'
        required
        {...register('lastName', { required: true })}
      />
      <Input
        type='text'
        placeholder='Age'
        label='Age'
        disabled
        errorMessage={errors.age ? 'Please enter number for age.' : false}
        {...register('age', { pattern: /\d+/ })}
      />
      <input type='submit' />
    </form>
  )
}

export default React.memo(BasicForm)
