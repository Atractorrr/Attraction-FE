import { useFormContext } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { SignUpFormType } from '../model'
import UserInfoExpirationDate from './UserInfoExpirationDate'
import UserAgreement from './UserAgreement'

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

export default function UserInfoField() {
  const { mutateAsync } = useMutation({
    mutationFn: postDuplicateName,
  })
  const {
    register,
    formState: { errors },
    getValues,
    clearErrors,
    setValue,
    watch,
  } = useFormContext<SignUpFormType>()

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
      <legend className="mb-12 break-keep text-2xl font-bold">
        서비스 이용에 있어 필수 정보를 입력해주세요
      </legend>
      <label htmlFor="nickName" className="mb-6 block" aria-label="닉네임">
        <p className="mb-2 text-sm text-gray-700">닉네임</p>
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            id="nickName"
            className="grow rounded-lg border border-gray-100 p-2"
            placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
            {...register('nickName', {
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
            className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
            중복확인
          </button>
        </div>
        {errors.nickName?.message && (
          <p className="mt-2 text-red-500">{errors.nickName.message}</p>
        )}
        {getValues('isNickNameChecked') && (
          <p className="mt-2 text-green-500">사용가능한 닉네임 입니다</p>
        )}
      </label>
      <label htmlFor="birth" aria-label="생년월일" className="mb-6 block">
        <p className="mb-2 text-sm text-gray-700">생년월일</p>
        <input
          id="birth"
          className="w-full grow rounded-lg border border-gray-100 p-2"
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
    </fieldset>
  )
}