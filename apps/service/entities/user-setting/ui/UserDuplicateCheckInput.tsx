import { ExclamationCircleOutline } from '@attraction/icons'
import { useMutation } from '@tanstack/react-query'
import { useFormContext, useWatch } from 'react-hook-form'
import { checkInputValid } from '../lib/util'

interface UserDuplicateCheckInputType {
  userDuplicateCheckHandler: (nickname: {
    nickname: string
  }) => Promise<unknown>
  errorMsg: string | undefined
  nickname?: string
}

export default function UserDuplicateCheckInput({
  userDuplicateCheckHandler,
  errorMsg,
  nickname,
}: UserDuplicateCheckInputType) {
  const { register, getValues, setValue, setError, clearErrors, control } =
    useFormContext()
  const { mutate } = useMutation({
    mutationFn: userDuplicateCheckHandler,
    onError: () => {
      setValue('isNickNameChecked', false)
      setError('nickname', { message: '중복된 이메일 입니다' })
    },
    onSuccess: () => {
      setValue('isNickNameChecked', true)
      clearErrors('nickname')
    },
  })

  const duplicateCheckHandler = () => {
    if (checkInputValid(getValues('nickname'), setError)) {
      mutate({ nickname: getValues('nickname') })
    }
  }

  const watchIsNickNameChecked = useWatch({
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
            validate: (value: string) => {
              if (value !== nickname && !watchIsNickNameChecked) {
                return '중복 확인을 해주세요'
              }
              return true
            },
          })}
        />
        <button
          type="button"
          onClick={() => duplicateCheckHandler()}
          className="rounded-lg bg-gray-50 px-5 py-3 text-sm dark:bg-gray-700">
          중복확인
        </button>
      </div>
      {errorMsg && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errorMsg}
        </p>
      )}
      {getValues('isNickNameChecked') && (
        <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
      )}
    </label>
  )
}
