'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm, useFormState } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import {
  SignUpFormType,
  UserInfoField,
  UserJobField,
  UserPreferTagField,
} from '@/features/sign-up'
import { useMutation } from '@tanstack/react-query'
import { checkSignUpFormErr } from '../lib'

const postSignUpForm = async (
  signUpFormData: Omit<
    SignUpFormType,
    'isNickNameChecked' | 'selectPolicyAll' | 'policies'
  >,
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/join`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpFormData),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error('중복확인을 해주세요')
    }
    return res.json()
  })

  return data
}

export default function SignUp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)
  const [checkError, setCheckError] = useState(false)
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
      email: '',
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

  const { errors } = useFormState({ control: formMethod.control })
  const { mutate } = useMutation({ mutationFn: postSignUpForm })
  const onSubmit = (data: SignUpFormType) => {
    if (activeIndex === signUpFieldArr.length - 1) {
      mutate({
        email: 'swarvy0000@gmail.com',
        nickname: data.nickname,
        interest: data.interest,
        birthDate: data.birthDate,
        adPolices: data.adPolices,
        occupation: data.occupation,
        userExpiration: data.userExpiration,
      })
    }
  }

  useEffect(() => {
    if (activeBtn) {
      setCheckError(true)
    }
  }, [activeBtn])

  useEffect(() => {
    if (
      checkError &&
      !Object.keys(errors).length &&
      activeIndex < signUpFieldArr.length - 1
    ) {
      setActiveIndex((pre) => pre + 1)
      setActiveBtn(false)
      setCheckError(false)
    }
  }, [activeIndex, checkError, errors, signUpFieldArr.length])

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
