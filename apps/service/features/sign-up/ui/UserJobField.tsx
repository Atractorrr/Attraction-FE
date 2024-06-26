/* eslint-disable jsx-a11y/label-has-associated-control */
import { USER_INFO_OCCUPATION } from '@/features/user-setting'
import { WarnTxt } from '@/shared/ui'
import { Button } from '@attraction/design-system/dist'
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
    <fieldset className="block h-fit px-5 sm:px-10">
      <legend className="mb-4 block break-keep text-2xl font-bold">
        어떤일을 하시나요?
      </legend>
      <p className="mb-12 break-keep text-gray-500 dark:text-gray-400">
        현재 몸담고 계시는 산업 분야를 알려주세요
        <br className="hidden xs:block" />
        직업 정보는 뉴스레터 맞춤 추천 및 통계에 사용돼요
      </p>
      <p className="mb-5 text-sm">산업분야</p>
      <div className="flex flex-wrap gap-4 *:rounded-full">
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
              {USER_INFO_OCCUPATION.get(listDataKey)}
            </Button>
          )
        })}
      </div>

      {errors.occupation?.message && (
        <div className="mt-8">
          <WarnTxt content={errors.occupation.message} color="red" />
        </div>
      )}
    </fieldset>
  )
}
