'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import { UserInfoField, SignUpFormType } from '@/features/sign-up'

export default function SignUp() {
  const formMethod = useForm<SignUpFormType>({
    defaultValues: {
      email: '',
      nickName: '',
      interest: [],
      birthDate: '',
      userExpiration: 6,
      occupation: '',
      selectPolicyAll: false,
      policies: [
        {
          type: 'mandatory1',
          value: false,
        },
        {
          type: 'mandatory2',
          value: false,
        },
      ],
    },
  })

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  return (
    <FormProvider {...formMethod}>
      <form className="w-fit rounded-3xl bg-white p-10">
        <UserInfoField />
        <Button
          type="submit"
          disabled={!!Object.keys(formMethod.formState.errors).length}
          className="mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white">
          다음으로
        </Button>
      </form>
    </FormProvider>
  )
}
