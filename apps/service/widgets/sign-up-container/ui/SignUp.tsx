'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import {
  SignUpFormType,
  UserInfoField,
  UserJobField,
  UserPreferTagField,
} from '@/features/sign-up'
import { useMutation } from '@tanstack/react-query'
import { checkSignUpFormErr } from '../lib'
import { postSignUpForm } from '../api'
import { useSignUpFunnel } from '../lib/hook'

interface SignUpPropsType {
  email: string | undefined
}

export default function SignUp({ email }: SignUpPropsType) {
  const signUpFieldArr = useMemo(
    () => [
      { activeComponent: <UserInfoField key={0} />, type: 'userInfo' },
      { activeComponent: <UserJobField key={1} />, type: 'occupation' },
      { activeComponent: <UserPreferTagField key={2} />, type: 'interest' },
    ],
    [],
  )
  const formMethod = useForm<SignUpFormType>({
    defaultValues: {
      email,
      nickname: '',
      isNickNameChecked: false,
      interest: [],
      birthDate: '',
      userExpiration: 6,
      adPolices: false,
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

  const { activeIndex, setActiveBtn } = useSignUpFunnel({
    errors: formMethod.formState.errors,
    signUpFieldArr,
  })
  const { mutate } = useMutation({ mutationFn: postSignUpForm })
  const onSubmit = (data: SignUpFormType) => {
    if (activeIndex === signUpFieldArr.length - 1) {
      mutate({
        email: email as string,
        nickname: data.nickname,
        interest: data.interest,
        birthDate: data.birthDate,
        adPolices: data.adPolices,
        occupation: data.occupation,
        userExpiration: data.userExpiration,
      })
    }
  }

  return (
    <FormProvider {...formMethod}>
      <form
        className="flex size-full max-w-[540px] flex-col justify-between bg-white p-5 sm:rounded-3xl sm:p-10 dark:bg-gray-800"
        onSubmit={formMethod.handleSubmit(onSubmit)}>
        {signUpFieldArr[activeIndex].activeComponent}
        <Button
          type="submit"
          disabled={!!Object.keys(formMethod.formState.errors).length}
          onClick={() => {
            checkSignUpFormErr(
              signUpFieldArr[activeIndex].type,
              formMethod.getValues,
              formMethod.setError,
            )
            setActiveBtn(true)
          }}
          className={`mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white dark:bg-gray-50 dark:text-gray-700 ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
          {activeIndex === signUpFieldArr.length - 1
            ? '가입 할래요!'
            : '다음으로'}
        </Button>
      </form>
    </FormProvider>
  )
}
