import React, { useCallback } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { SettingForm } from '../model'
import { useCheckDuplicate } from '../lib'

interface UserSettingNameType {
  nickname: string
}

export default function UserSettingName({ nickname }: UserSettingNameType) {
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
    clearErrors,
    control,
  } = useFormContext<SettingForm>()
  const watchNicknameChecked = useWatch<SettingForm>({
    name: 'isNicknameChecked',
    control,
  })

  const duplicateSuccessHandler = useCallback(() => {
    setValue('isNicknameChecked', true)
    clearErrors('nickname')
  }, [clearErrors, setValue])

  const duplicateErrorHandler = useCallback(() => {
    setValue('isNicknameChecked', false)
  }, [setValue])

  const { mutate } = useCheckDuplicate({
    successHandler: duplicateSuccessHandler,
    errorHandler: duplicateErrorHandler,
  })

  const duplicateCheckHandler = useCallback(() => {
    mutate({ nickname: getValues('nickname') })
  }, [getValues, mutate])

  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">닉네임</legend>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          id="nickName"
          className="grow rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
          placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
          {...register('nickname', {
            onChange: () => {
              setValue('isNicknameChecked', false)
            },
            validate: (value) => {
              if (value !== nickname && !watchNicknameChecked) {
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
      {errors.nickname?.message && (
        <p className="mt-2 text-red-500">{errors.nickname.message}</p>
      )}
      {getValues('isNicknameChecked') && (
        <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
      )}
    </fieldset>
  )
}
