import { useFormContext } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { SignUpFormType } from '../model'
import UserInfoExpirationDate from './UserInfoExpirationDate'
import UserAgreement from './UserAgreement'

const postDuplicateName = async (nickname: { nickname: string }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/join/username-duplicate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nickname),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error('중복확인을 해주세요')
    }
    return res.json()
  })

  return data
}

export default function UserInfoField() {
  const {
    register,
    formState: { errors },
    getValues,
    clearErrors,
    setValue,
    watch,
    setError,
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

  return (
    <fieldset className="grow overflow-y-auto">
      <legend className="mb-12 break-keep text-2xl font-bold">
        서비스 이용에 있어 필수 정보를 입력해주세요
      </legend>
      <div className="flex h-full flex-col ">
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
                  if (!watch('isNickNameChecked')) {
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
        <label htmlFor="birth" aria-label="생년월일" className="mb-6 block">
          <p className="mb-2 text-sm">생년월일</p>
          <input
            id="birth"
            autoComplete="off"
            className="w-full rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
            placeholder="예) 20240503"
            {...register('birthDate', {
              required: '생년월일을 입력해 주세요',
              pattern: {
                value: /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
                message: '생년월일 형식은 YYYYMMDD 입니다.',
              },
            })}
          />
          {errors.birthDate?.message && (
            <p className="mt-2 text-red-500">{errors.birthDate.message}</p>
          )}
        </label>
        <UserInfoExpirationDate />
        <UserAgreement />
      </div>
    </fieldset>
  )
}
