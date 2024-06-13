import { ExclamationCircleOutline } from '@attraction/icons'
import { useFormContext } from 'react-hook-form'
import { BIRTH_REGEX } from '../constant'
import { SignUpFormType } from '../model'

export default function UserInfoBirthInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  return (
    <fieldset className="mb-6 block">
      <legend className="mb-4 text-2xl font-bold">
        생년월일을 입력해주세요
      </legend>
      <p className="mb-10 text-gray-500">
        생년월일은 뉴스레터 맞춤 추천 외의 <br />
        다른 용도로 사용되지 않아요
      </p>
      <label
        htmlFor="birth"
        aria-label="생년월일"
        className="mb-2 flex flex-col gap-2 text-sm">
        생년월일
        <input
          id="birth"
          autoComplete="off"
          className="w-full rounded-lg border border-gray-100 px-3 py-2 outline-none transition-colors focus:border-blue-400 dark:border-gray-700 dark:bg-gray-700"
          placeholder="예) 20240503"
          {...register('birthDate', {
            required: '생년월일을 입력해 주세요',
            pattern: {
              value: BIRTH_REGEX,
              message: '생년월일 형식은 YYYYMMDD 입니다.',
            },
          })}
        />
      </label>
      {errors.birthDate?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.birthDate.message}
        </p>
      )}
    </fieldset>
  )
}
