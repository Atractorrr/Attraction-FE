'use client'

import React, { useEffect, useState } from 'react'
import { FormProvider, useForm, useFormState } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import {
  UserInfoField,
  SignUpFormType,
  UserJobField,
  UserPreferTagField,
} from '@/features/sign-up'

export default function SignUp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)
  const [checkError, setCheckError] = useState(false)

  const signUpFieldArr = [
    <UserInfoField key={0} />,
    <UserJobField key={1} />,
    <UserPreferTagField key={2} />,
  ]
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

  const { errors } = useFormState({ control: formMethod.control })

  const onSubmit = () => {
    if (activeIndex === 1 && formMethod.getValues('occupation') === '') {
      formMethod.setError('occupation', { message: '직업을 선택해주세요' })
    }
  }

  useEffect(() => {
    if (activeBtn) {
      setCheckError(true)
    }
  }, [activeBtn, errors])

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
        className="max-w-[540px] rounded-3xl bg-white p-10"
        onSubmit={formMethod.handleSubmit(onSubmit)}>
        {signUpFieldArr[activeIndex]}
        <Button
          type="submit"
          disabled={!!Object.keys(formMethod.formState.errors).length}
          onClick={() => {
            setActiveBtn(true)
          }}
          className={`mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
          {activeIndex === signUpFieldArr.length - 1
            ? '가입 할래요!'
            : '다음으로'}
        </Button>
      </form>
    </FormProvider>
  )
}
