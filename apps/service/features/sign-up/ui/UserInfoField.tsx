import { useFormContext } from 'react-hook-form'
import { SignUpFormType } from '../model'

import UserInfoExpirationDate from './UserInfoExpirationDate'
import UserAgreement from './UserAgreement'

export default function UserInfoField() {
  const duplicateCheckHandler = () => {}
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  return (
    <fieldset>
      <legend className="mb-12 text-2xl font-bold">
        서비스 이용에 있어 필수 정보를 입력해주세요
      </legend>
      <label htmlFor="nickName" className="mb-6 block" aria-label="닉네임">
        <p className="mb-2 text-sm text-gray-700">닉네임</p>
        <div className="flex gap-2">
          <input
            id="nickName"
            className="grow rounded-lg border border-gray-100 p-2"
            placeholder="서비스에서 사용할 닉네임을 입력해 주세요"
          />
          <button
            type="button"
            onClick={() => duplicateCheckHandler()}
            className="rounded-lg bg-gray-700 p-3 text-sm text-gray-50">
            중복확인
          </button>
        </div>
      </label>
      <label htmlFor="birth" aria-label="생년월일" className="mb-6 block">
        <p className="mb-2 text-sm text-gray-700">생년월일</p>
        <input
          id="birth"
          className="w-full grow rounded-lg border border-gray-100 p-2"
          placeholder="생년월일을 입력해주세요 예) 20240503"
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
