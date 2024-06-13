import { ExclamationCircleOutline } from '@attraction/icons'
import { useFormContext, useWatch } from 'react-hook-form'
import { SignUpFormType } from '../model'

export default function UserInfoNicknameInput() {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    control,
  } = useFormContext<SignUpFormType>()

  const watchIsNickNameChecked = useWatch<SignUpFormType>({
    name: 'isNickNameChecked',
    control,
  })
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
      </label>
      {errors.nickname?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.nickname.message}
        </p>
      )}
      {getValues('isNickNameChecked') && (
        <p className="mt-2 text-green-500">멋진 닉네임이에요! 👍</p>
      )}
    </fieldset>
  )
}
