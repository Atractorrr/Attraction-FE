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
import { checkSignUpFormErr } from '../lib'

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

  const onSubmit = () => {
    // // TODO: 백엔드랑 맞추기
    // if (activeIndex === signUpFieldArr.length - 1) {
    //   console.log(data)
    // }
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
