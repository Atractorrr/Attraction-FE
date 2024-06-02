import { useFormContext } from 'react-hook-form'
import { SignUpFormType } from '../model'
import { BIRTH_REGEX } from '../constant'

export default function UserInfoBirthInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  return (
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
            value: BIRTH_REGEX,
            message: '생년월일 형식은 YYYYMMDD 입니다.',
          },
        })}
      />
      {errors.birthDate?.message && (
        <p className="mt-2 text-red-500">{errors.birthDate.message}</p>
      )}
    </label>
  )
}
