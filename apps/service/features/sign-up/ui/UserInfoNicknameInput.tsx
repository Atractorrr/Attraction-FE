import { checkInputValid } from '@/features/user-setting/lib'
import { useDebounce } from '@/shared/lib'
import { ExclamationCircleOutline } from '@attraction/icons'
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
      setError('nickname', { message: '중복된 이메일 입니다' })
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
    <fieldset className="mb-6 block">
      <legend className="mb-4 text-2xl font-bold">
        앞으로 어트랙션에서 사용할
        <br /> 닉네임을 입력해주세요
      </legend>
      <p className="mb-10 text-gray-500">닉네임은 언제든지 수정할 수 있어요</p>
      <label htmlFor="nickName" className="mb-2 flex flex-col gap-2 text-sm">
        닉네임
        <input
          autoComplete="off"
          id="nickName"
          className="grow rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
          placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
          {...register('nickname', {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              setNickname(e.target.value)
              setValue('isNickNameChecked', false)
            },
          })}
        />
      </label>
      {errors.nickname?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.nickname.message}
        </p>
      )}
      {watchIsNickNameChecked && (
        <p className="mt-2 text-green-500">멋진 닉네임이에요! 👍</p>
      )}
    </fieldset>
  )
}
