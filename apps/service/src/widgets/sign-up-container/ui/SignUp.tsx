'use client'

import { useAuth } from '@/entities/auth'
import {
  SignUpFormType,
  UserAgreement,
  UserInfoBirthInput,
  UserInfoExpirationDate,
  UserInfoNicknameInput,
  UserJobField,
  UserPreferTagField,
} from '@/features/sign-up'
import { Button } from '@attraction/design-system/dist'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { postSignUpForm } from '../api'
import { checkSignUpFormErr, useSignUpFunnel } from '../lib'

export default function SignUp() {
  const { userEmail } = useAuth()
  const router = useRouter()

  const signUpFieldArr = useMemo(
    () => [
      {
        activeComponent: <UserAgreement key={0} />,
        type: 'selectMandatoryPolicyAll',
      },
      {
        activeComponent: <UserInfoNicknameInput key={1} />,
        type: 'nickname',
      },
      {
        activeComponent: <UserInfoBirthInput key={2} />,
        type: 'birthDate',
      },
      {
        activeComponent: <UserInfoExpirationDate key={3} />,
        type: 'userExpiration',
      },
      { activeComponent: <UserJobField key={4} />, type: 'occupation' },
      { activeComponent: <UserPreferTagField key={5} />, type: 'interest' },
    ],
    [],
  )
  const formMethod = useForm<SignUpFormType>({
    defaultValues: {
      email: userEmail!,
      nickname: '',
      isNickNameChecked: false,
      interest: [],
      birthDate: '',
      userExpiration: 6,
      adPolices: false,
      occupation: '',
      selectPolicyAll: false,
      selectMandatoryPolicyAll: false,
      policies: [
        {
          type: 'mandatory1',
          value: false,
          text: '(필수) 서비스 이용약관 동의',
        },
        {
          type: 'mandatory2',
          value: false,
          text: '(필수) 개인정보 수집 및 이용 동의',
        },
        // {
        //   type: 'adPolicy',
        //   value: false,
        //   text: '(선택) 마케팅 정보 수신 동의',
        // },
      ],
    },
  })

  const { activeIndex, setActiveBtn, prevBtnHandler } = useSignUpFunnel({
    errors: formMethod.formState.errors,
    signUpFieldArr,
  })
  const { mutate } = useMutation({
    mutationFn: postSignUpForm,
    onSuccess: () => {
      router.replace('/')
      router.refresh()
    },
  })
  const onSubmit = async (data: SignUpFormType) => {
    if (activeIndex === signUpFieldArr.length - 1) {
      mutate({
        email: userEmail as string,
        nickname: data.nickname,
        interest: data.interest,
        birthDate: data.birthDate,
        // adPolices: data.policies.find((el) => el.type === 'adPolicy')
        //   ?.value as boolean,
        adPolices: false,
        occupation: data.occupation,
        userExpiration: data.userExpiration,
      })
    }
  }

  return (
    <FormProvider {...formMethod}>
      <form
        className="flex h-auto min-h-dvh w-full max-w-[540px] flex-col justify-between bg-white pt-12 shadow-gray-700/10 sm:pt-20 lg:min-h-[calc(100dvh-6rem)] lg:rounded-3xl lg:shadow-xl dark:bg-gray-800 dark:shadow-none"
        onSubmit={formMethod.handleSubmit(onSubmit)}>
        {signUpFieldArr[activeIndex].activeComponent}
        <div className="mt-4 flex flex-col-reverse gap-3 p-5 xs:flex-row sm:p-10">
          {activeIndex > 0 && (
            <Button
              type="button"
              className="block w-auto rounded-xl bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100 sm:w-36 sm:py-5 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={prevBtnHandler}>
              이전으로
            </Button>
          )}
          <Button
            type="submit"
            disabled={Object.keys(formMethod.formState.errors).includes(
              signUpFieldArr[activeIndex].type,
            )}
            onClick={() => {
              checkSignUpFormErr(
                signUpFieldArr[activeIndex].type,
                formMethod.getValues,
                formMethod.setError,
              )
              setActiveBtn(true)
            }}
            className="grow rounded-xl bg-gray-700 py-4 font-medium text-gray-50 transition-colors hover:bg-gray-800 disabled:!bg-gray-50 disabled:!text-gray-400 md:py-5 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100 dark:disabled:!bg-gray-700 dark:disabled:text-gray-500">
            {activeIndex === signUpFieldArr.length - 1
              ? '가입 할래요!'
              : '다음으로'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
