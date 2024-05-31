import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { SettingForm } from '../model'

const User = {
  nickName: 'Lee',
  interest: ['IT_TECH', 'CURRENT_AFFAIRS_SOCIETY'],
  birthDate: '20200202',
  userExpiration: 6,
  occupation: '관리직',
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

export default function UserSettingName() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    getValues,
    clearErrors,
  } = useFormContext<SettingForm>()

  const { mutateAsync } = useMutation({
    mutationFn: postDuplicateName,
  })

  const duplicateCheckHandler = async () => {
    await mutateAsync(getValues('nickName'))
    // const data = await mutateAsync(getValues('nickName'))

    // if (data.message === '409 (MSW)') {
    //   setError('nickName', { message: '중복된 이메일 입니다' })
    //   setIsChecked(false)
    // } else {

    setValue('isNickNameChecked', true)
    clearErrors('nickName')
    // }
  }
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">닉네임</legend>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          id="nickName"
          className="grow rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
          placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
          {...register('nickName', {
            onChange: () => {
              setValue('isNickNameChecked', false)
            },
            validate: (value) => {
              if (value !== User.nickName && !watch('isNickNameChecked')) {
                return '중복 확인을 해주세요'
              }
              return true
            },
          })}
        />
        <button
          type="button"
          onClick={() => duplicateCheckHandler()}
          className="rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-700">
          중복확인
        </button>
      </div>
      {errors.nickName?.message && (
        <p className="mt-2 text-red-500">{errors.nickName.message}</p>
      )}
      {getValues('isNickNameChecked') && (
        <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
      )}
    </fieldset>
  )
}
