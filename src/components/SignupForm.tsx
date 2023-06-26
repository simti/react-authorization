import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { SignupFormValidationRules } from './validation/signup-form-rules.js'

type TFormValues = {
  username: string;
  email: string;
  channel: string;
}
const Signup = () => {
  const form = useForm<TFormValues>();
  const { register, control, handleSubmit, formState } = form;

  const onSubmit = (data: TFormValues) => console.log("form submitted", data)
  const { errors } = formState;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">username</label>
        <input type="text" id="username" {...register("username", {
          ...SignupFormValidationRules['username']
        })} />
        <span className="validation-error">
          {errors.username?.message}
        </span>

        <label htmlFor="email">email</label>
        <input type="text" id="email" {...register("email", {
          ...SignupFormValidationRules['email']
        })} />
        <span className="validation-error">
          {errors.email?.message}
        </span>

        <label htmlFor="channel">channel</label>
        <input type="text" id="channel" {...register("channel", {
          ...SignupFormValidationRules['channel']
        })} />
        <span className="validation-error">
          {errors.channel?.message}
        </span>

        <button>submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default Signup;
