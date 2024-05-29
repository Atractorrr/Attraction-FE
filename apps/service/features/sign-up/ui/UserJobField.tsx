import { useFormContext } from 'react-hook-form'
import { SignUpFormType } from '../model'
import { USER_INFO_OCCUPATION, UserSettingList } from '@/entities/user-setting'

export default function UserJobField() {
  // TODO: 오류 나중에 한번에 잡기
  const {
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<SignUpFormType>()

  const setOccupationFormValue = (keyItem: string) => {
    setValue('occupation', keyItem)
    if (Object.keys(errors).length) {
      clearErrors('occupation')
    }
  }

  return (
    <fieldset className="">
      <legend className="mb-4 text-2xl font-bold text-gray-700">
        어떤일을 하시나요
      </legend>
      <p className="mb-12 break-keep text-gray-500">
        현재 몸담고 계시는 산업 분야를 알려주세요
      </p>
      <p className="mb-5 text-sm text-gray-700">산업분야</p>
      <UserSettingList
        listData={USER_INFO_OCCUPATION}
        wrap
        btnClickHandler={setOccupationFormValue}
      />
      {errors.occupation?.message && (
        <p className="mt-2 text-red-500">{errors.occupation.message}</p>
      )}
    </fieldset>
  )
}