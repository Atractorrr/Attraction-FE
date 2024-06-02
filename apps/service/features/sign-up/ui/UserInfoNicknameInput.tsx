import { useFormContext, useWatch } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { SignUpFormType } from '../model'
import { postDuplicateName } from '../api'

export default function UserInfoNicknameInput() {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors,
    control,
  } = useFormContext<SignUpFormType>()
  const { mutate } = useMutation({
    mutationFn: postDuplicateName,
    onError: () => {
      setError('nickname', { message: '중복된 이메일 입니다' })
    },
    onSuccess: () => {
      setValue('isNickNameChecked', true)
      clearErrors('nickname')
    },
  })

  const duplicateCheckHandler = () => {
    mutate({ nickname: getValues('nickname') })
  }

  const watchIsNickNameChecked = useWatch<SignUpFormType>({
    name: 'isNickNameChecked',
    control,
  })
  return (
    <label htmlFor="nickName" className="mb-6 block" aria-label="닉네임">
      <p className="mb-2 text-sm">닉네임</p>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          autoComplete="off"
          id="nickName"
          className="grow rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
          placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
          {...register('nickname', {
            onChange: () => {
              setValue('isNickNameChecked', false)
            },
            validate: () => {
              if (!watchIsNickNameChecked) {
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
      {getValues('isNickNameChecked') && (
        <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
      )}
    </label>
  )
}
