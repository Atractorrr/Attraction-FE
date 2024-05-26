import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { SignUpFormType } from '../model'
import { USER_INFO_EXPIRATION } from '../constant'

export default function UserInfoExpirationDate() {
  const [isActiveIndex, setIsActiveIndex] = useState(0)
  const { setValue } = useFormContext<SignUpFormType>()

  return (
    <label
      htmlFor="expirationDate"
      aria-label="개인정보 수집 유효기간"
      className="mb-5 block">
      <p className="mb-2 text-sm text-gray-700">개인정보 수집 유효기간</p>
      <div className="mb-2 grid grid-cols-2 gap-2 md:flex">
        {Object.keys(USER_INFO_EXPIRATION).map((key, i) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setValue(
                'userExpiration',
                USER_INFO_EXPIRATION[key as keyof typeof USER_INFO_EXPIRATION],
              )
              setIsActiveIndex(i)
            }}
            className={`w-full rounded-lg ${isActiveIndex === i ? 'bg-gray-700' : 'bg-gray-100'} px-6 py-2 text-white`}>
            {key}
          </button>
        ))}
      </div>
      <p className="text-sm text-red-500 ">
        6개월 동안 서비스를 이용하지 않을 시 자동으로 회원이 탈퇴돼요
      </p>
    </label>
  )
}
