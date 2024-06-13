'use client'

import {
  SignUpFormType,
  UserAgreement,
  UserInfoBirthInput,
  UserInfoExpirationDate,
  UserInfoNicknameInput,
  UserJobField,
  UserPreferTagField,
} from '@/features/sign-up'
import { Button } from '@attraction/design-system'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { postSignUpForm } from '../api'
import { checkSignUpFormErr } from '../lib'
import { useSignUpFunnel } from '../lib/hook'

interface SignUpPropsType {
  email: string | undefined
}

export default function SignUp({ email }: SignUpPropsType) {
  const router = useRouter()
  const signUpFieldArr = useMemo(
    () => [
      { activeComponent: <UserAgreement key={0} />, type: 'userInfo' },
      { activeComponent: <UserInfoNicknameInput key={1} />, type: 'userInfo' },
      { activeComponent: <UserInfoBirthInput key={2} />, type: 'userInfo' },
      { activeComponent: <UserInfoExpirationDate key={3} />, type: 'userInfo' },
      { activeComponent: <UserJobField key={4} />, type: 'occupation' },
      { activeComponent: <UserPreferTagField key={5} />, type: 'interest' },
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
  const { mutate } = useMutation({
    mutationFn: postSignUpForm,
    onSuccess: async () => {
      await fetch(
        `${process.env.NEXT_PUBLIC_FE_URL}/api/auth/register-success`,
        {
          method: 'DELETE',
        },
      )

      router.push('/')
    },
  })
  const onSubmit = async (data: SignUpFormType) => {
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
