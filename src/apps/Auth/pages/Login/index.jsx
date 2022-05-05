import React from 'react'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { useLogin } from '../../Hooks/useLogin'
import cls from './Login.module.scss'

export const Login = () => {

  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()

  const { 
    loaded,
    errors,
    actions,
  } = useLogin()

  const onSubmit = React.useCallback(data => {
    actions.post(data)
    reset({
      email: '',
      password: '',
    })
  }, [actions, reset])


  return (
    <div className={cls.root}>
      <h1 className={cls.title}>Authorization</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Forms.FormInput
          label="Email"
          key={'1'}
          placeholder="example@gmail.com"
          error={formState.errors.email ? formState.errors.email : errors}
          {...register('email', required)}
        />

      </form>
    </div>
  )
}