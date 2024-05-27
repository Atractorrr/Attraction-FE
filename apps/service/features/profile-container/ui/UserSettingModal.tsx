/* eslint-disable import/no-extraneous-dependencies */
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { Button } from '@attraction/design-system'
import UserPreferTagField from './UserTag'
import UserInfoJob from './Job'

const User = {
  nickName: 'Lee',
  interest: ['IT_TECH', 'CURRENT_AFFAIRS_SOCIETY'],
  birthDate: '20200202',
  userExpiration: 6,
  occupation: '관리직',
}

const USER_INFO_EXPIRATION = {
  '6개월': 6,
  '12개월': 12,
  '5년': 60,
  평생: 0,
}

function UserInfoExpirationDate() {
  const [activeKey, setActiveKey] =
    useState<keyof typeof USER_INFO_EXPIRATION>('12개월')
  const { setValue } = useFormContext()

  return (
    <label
      htmlFor="expirationDate"
      aria-label="개인정보 수집 유효기간"
      className="mb-5 block">
      <p className="mb-2 text-sm text-gray-700">개인정보 수집 유효기간</p>
      <div className="mb-2 grid grid-cols-2 gap-2 md:flex">
        {Object.keys(USER_INFO_EXPIRATION).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setValue(
                'userExpiration',
                USER_INFO_EXPIRATION[key as keyof typeof USER_INFO_EXPIRATION],
              )
              setActiveKey(key as keyof typeof USER_INFO_EXPIRATION)
            }}
            className={`w-full rounded-lg ${activeKey === key ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'} px-6 py-2`}>
            {key}
          </button>
        ))}
      </div>
      {activeKey !== '평생' ? (
        <p className="text-sm text-red-500 ">
          {activeKey} 동안 서비스를 이용하지 않을 시 자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </label>
  )
}

const postDuplicateName = async (nickName: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/join/username-duplicate`,
    {
      method: 'POST',
      body: JSON.stringify(nickName),
    },
  ).then((res) => res.json())

  return data
}

export type SettingForm = {
  nickName: string
  preferTag: { value: string }[]
  isNickNameChecked: boolean
  userExpiration: number
  occupation: string
}

export default function UserSettingModal() {
  const { mutateAsync } = useMutation({
    mutationFn: postDuplicateName,
  })
  const formMethod = useForm<SettingForm>({
    defaultValues: {
      nickName: User.nickName,
      preferTag: [],
      isNickNameChecked: false,
      userExpiration: User.userExpiration,
      occupation: User.occupation,
    },
  })

  const duplicateCheckHandler = async () => {
    await mutateAsync(formMethod.getValues('nickName'))
    // const data = await mutateAsync(getValues('nickName'))

    // if (data.message === '409 (MSW)') {
    //   setError('nickName', { message: '중복된 이메일 입니다' })
    //   setIsChecked(false)
    // } else {

    formMethod.setValue('isNickNameChecked', true)
    formMethod.clearErrors('nickName')
    // }
  }

  const hi = () => {
    if (formMethod.getValues('nickName') === User.nickName) {
      formMethod.clearErrors('nickName')
    }
  }

  return (
    <FormProvider {...formMethod}>
      <form
        className="absolute max-w-[540px] rounded-3xl bg-white p-5 sm:p-10"
        onSubmit={formMethod.handleSubmit(hi)}>
        <fieldset>
          <div className="flex flex-col gap-2 md:flex-row">
            <input
              id="nickName"
              className="grow rounded-lg border border-gray-100 p-2"
              placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
              {...formMethod.register('nickName', {
                onChange: () => {
                  formMethod.setValue('isNickNameChecked', false)
                },
                validate: (value) => {
                  if (
                    value !== User.nickName &&
                    !formMethod.watch('isNickNameChecked')
                  ) {
                    return '중복 확인을 해주세요'
                  }
                  return true
                },
              })}
            />
            <button
              type="button"
              onClick={() => duplicateCheckHandler()}
              className="rounded-lg bg-gray-100 p-3 text-sm text-gray-700">
              중복확인
            </button>
          </div>
          {formMethod.formState.errors.nickName?.message && (
            <p className="mt-2 text-red-500">
              {formMethod.formState.errors.nickName.message}
            </p>
          )}
          {formMethod.getValues('isNickNameChecked') && (
            <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
          )}
        </fieldset>
        <fieldset>
          <UserInfoExpirationDate />
          <UserPreferTagField />
          <UserInfoJob />
        </fieldset>
        <Button
          type="submit"
          disabled={!!Object.keys(formMethod.formState.errors).length}
          className={`mt-14 w-full rounded-xl bg-gray-700 py-5 font-medium text-white ${Object.keys(formMethod.formState.errors).length ? 'opacity-40' : 'opacity-100'}`}>
          변경사항 저장하기
        </Button>
      </form>
    </FormProvider>
  )
}
