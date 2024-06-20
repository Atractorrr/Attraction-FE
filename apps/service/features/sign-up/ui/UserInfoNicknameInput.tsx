import { checkInputValid } from '@/features/user-setting/lib'
import { useDebounce } from '@/shared/lib'
import { WarnTxt } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { postDuplicateName } from '../api'
import { SignUpFormType } from '../model'

export default function UserInfoNicknameInput() {
  const {
    register,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext<SignUpFormType>()
  const [nickname, setNickname] = useState<string>()
  const debounceDuplicateInputValue = useDebounce(nickname, 200)
  const watchIsNickNameChecked = useWatch<SignUpFormType>({
    name: 'isNickNameChecked',
  })

  // TODO: 닉네임 입력할때 다음 버튼 비활성화 기능 추가하기

  const { mutate } = useMutation({
    mutationFn: postDuplicateName,
    onError: () => {
      setValue('isNickNameChecked', false)
      setError('nickname', { message: '중복된 이름이에요' })
    },
    onSuccess: () => {
      setValue('isNickNameChecked', true)
      clearErrors('nickname')
    },
  })

  useEffect(() => {
    if (
      debounceDuplicateInputValue &&
      checkInputValid(debounceDuplicateInputValue, setError)
    ) {
      mutate({ nickname: debounceDuplicateInputValue })
    }
  }, [debounceDuplicateInputValue, mutate, setError])

  return (
    <fieldset className="mb-6 block px-5 sm:px-10">
      <legend className="mb-4 break-keep text-2xl font-bold">
        앞으로 어트랙션에서 사용할
        <br className="hidden xs:block" /> 닉네임을 입력해주세요
      </legend>
      <p className="mb-12 break-keep text-gray-500 dark:text-gray-400">
        닉네임은 언제든지 수정할 수 있어요
      </p>
      <label
        htmlFor="nickName"
        className="mb-2 block w-full px-1 text-sm font-medium">
        닉네임
      </label>
      <input
        autoComplete="off"
        id="nickName"
        className="block h-12 w-full rounded-lg border border-gray-100 px-4 py-3 outline-none transition-colors focus:border-blue-400 focus:bg-white dark:border-gray-700 dark:bg-gray-700 dark:focus:bg-gray-800"
        placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
        {...register('nickname', {
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            setNickname(e.target.value)
            setValue('isNickNameChecked', false)
          },
        })}
      />
      {errors.nickname?.message && (
        <div className="mt-3">
          <WarnTxt content={errors.nickname.message} color="red" />
        </div>
      )}
      {watchIsNickNameChecked && (
        <p className="mt-3 px-1 text-green-500 dark:text-green-300">
          멋진 닉네임이에요! 👍
        </p>
      )}
    </fieldset>
  )
}
