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
import { Button } from '@attraction/design-system/dist'
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
      email,
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
        adPolices: data.policies.find((el) => el.type === 'adPolicy')
          ?.value as boolean,
        occupation: data.occupation,
        userExpiration: data.userExpiration,
      })
    }
  }

  return (
    <FormProvider {...formMethod}>
      <form
        className="flex h-auto min-h-dvh w-full max-w-[540px] flex-col justify-between bg-white pt-12 sm:pt-20 lg:min-h-[calc(100dvh-6rem)] lg:rounded-3xl dark:bg-gray-800"
        onSubmit={formMethod.handleSubmit(onSubmit)}>
        {signUpFieldArr[activeIndex].activeComponent}
        <div className="mt-14 flex gap-5">
          <Button
            type="button"
            className={`${activeIndex === 0 ? 'hidden' : 'block'} w-1/3 rounded-xl bg-gray-50 dark:bg-gray-700`}
            onClick={() => {
              prevBtnHandler()
            }}>
            이전으로
          </Button>
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
            className={`w-full rounded-xl bg-gray-700 py-5 font-medium text-white dark:bg-gray-50 dark:text-gray-700 ${
              Object.keys(formMethod.formState.errors).includes(
                signUpFieldArr[activeIndex].type,
              )
                ? 'opacity-40'
                : 'opacity-100'
            }`}>
            {activeIndex === signUpFieldArr.length - 1
              ? '가입 할래요!'
              : '다음으로'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
