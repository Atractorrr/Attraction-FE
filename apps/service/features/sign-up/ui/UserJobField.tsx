/* eslint-disable jsx-a11y/label-has-associated-control */
import { USER_INFO_OCCUPATION } from '@/features/user-setting'
import { Button } from '@attraction/design-system'
import { CheckOutline, ExclamationCircleOutline } from '@attraction/icons'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { SignUpFormType } from '../model'

export default function UserJobField() {
  // TODO: 오류 나중에 한번에 잡기
  const {
    setValue,
    formState: { errors },
    clearErrors,
    getValues,
  } = useFormContext<SignUpFormType>()
  const [activeKey, setActiveKey] = useState<string>(getValues('occupation'))

  const setOccupationFormValue = (keyItem: string) => {
    setValue('occupation', keyItem)
    if (errors.occupation?.message) {
      clearErrors('occupation')
    }
  }
  const listDataKeys = Array.from(USER_INFO_OCCUPATION.keys())

  return (
    <fieldset className="h-fit">
      <legend className="mb-4 text-2xl font-bold">어떤일을 하시나요</legend>
      <p className="mb-12 break-keep text-gray-500">
        현재 몸담고 계시는 산업 분야를 알려주세요
        <br />
        직업 정보는 뉴스레터 맞춤 추천 및 통계에 사용돼요
      </p>
      <p className="mb-5 text-sm">산업분야</p>
      <div className="flex flex-wrap  gap-4 *:rounded-full">
        {listDataKeys.map((listDataKey) => {
          return (
            <Button
              type="button"
              key={listDataKey}
              className={`flex items-center justify-start gap-2 rounded-lg ${activeKey === listDataKey ? 'bg-gray-700 text-white dark:bg-gray-50  dark:text-gray-700' : 'bg-gray-50 dark:bg-gray-700'} px-6 py-2 `}
              onClick={() => {
                setOccupationFormValue(listDataKey)
                setActiveKey(listDataKey)
              }}>
              <label
                htmlFor={listDataKey}
                className={`  flex size-6 cursor-pointer items-center justify-center rounded-full p-1  ${activeKey === listDataKey ? 'inline bg-white dark:bg-gray-600' : 'hidden border-2 border-gray-700 dark:border-gray-100'} focus:border-none`}>
                <CheckOutline className="peer size-full rounded-md  font-bold text-gray-700 dark:text-white" />
              </label>
              {USER_INFO_OCCUPATION.get(listDataKey)}
            </Button>
          )
        })}
      </div>

      {errors.occupation?.message && (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {errors.occupation.message}
        </p>
      )}
    </fieldset>
  )
}
