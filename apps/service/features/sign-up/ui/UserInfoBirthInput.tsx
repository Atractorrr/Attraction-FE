import { useFormContext } from 'react-hook-form'
import { WarnTxt } from '@/shared/ui'
import { BIRTH_REGEX } from '../constant'
import { SignUpFormType } from '../model'

export default function UserInfoBirthInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  return (
    <fieldset className="mb-6 block px-5 sm:px-10">
      <legend className="mb-4 break-keep text-2xl font-bold">
        생년월일을 입력해주세요
      </legend>
      <p className="mb-12 break-keep text-gray-500 dark:text-gray-400">
        생년월일은 뉴스레터 맞춤 추천 외의 <br />
        다른 용도로 사용되지 않아요
      </p>
      <label
        htmlFor="birth"
        aria-label="생년월일"
        className="mb-2 block w-full px-1 text-sm font-medium">
        생년월일
      </label>
      <input
        id="birth"
        autoComplete="off"
        className="block h-12 w-full rounded-lg border border-gray-100 px-4 py-3 outline-none transition-colors focus:border-blue-400 focus:bg-white dark:border-gray-700 dark:bg-gray-700 dark:focus:bg-gray-800"
        placeholder="예) 20240503"
        {...register('birthDate', {
          required: '생년월일을 입력해 주세요',
          pattern: {
            value: BIRTH_REGEX,
            message: '생년월일 형식은 YYYYMMDD 입니다.',
          },
        })}
      />
      {errors.birthDate?.message && (
        <div className="mt-3">
          <WarnTxt content={errors.birthDate.message} color="red" />
        </div>
      )}
    </fieldset>
  )
}
