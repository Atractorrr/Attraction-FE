/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { CheckOutline } from '@attraction/icons'
import { Button } from '@attraction/design-system/dist'
import { USER_INFO_EXPIRATION } from '@/features/user-setting'
import { WarnTxt } from '@/shared/ui'
import { SignUpFormType } from '../model'

export default function UserInfoExpirationDate() {
  const { setValue, getValues } = useFormContext<SignUpFormType>()
  const setExpirationFormValue = (keyItem: string) => {
    setValue('userExpiration', Number(keyItem))
  }
  const watchUserExpiration = useWatch<SignUpFormType>({
    name: 'userExpiration',
  }).toString()
  const [activeKey, setActiveKey] = useState(
    getValues('userExpiration').toString(),
  )
  const listDataKeys = Array.from(USER_INFO_EXPIRATION.keys())

  return (
    <fieldset className="mb-5 block px-5 sm:px-10">
      <legend className="mb-4 break-keep text-2xl font-bold">
        개인정보 수집 유효기간을 선택해주세요
      </legend>
      <p className="mb-12 break-keep text-gray-500 dark:text-gray-400">
        선택한 기간 동안 아무런 활동을 하지 않으면
        <br className="hidden xs:block" />
        자동으로 탈퇴시켜 드려요
      </p>
      <p className="mb-6 whitespace-nowrap px-1 text-sm font-medium">
        개인정보 수집 유효기간
      </p>
      {listDataKeys.map((listDataKey) => {
        return (
          <Button
            type="button"
            key={listDataKey}
            className="mb-5 flex gap-4"
            onClick={() => {
              setExpirationFormValue(listDataKey)
              setActiveKey(listDataKey)
            }}>
            <label
              htmlFor={listDataKey}
              className={` flex size-5 cursor-pointer items-center justify-center rounded-full p-1  ${activeKey === listDataKey ? 'bg-gray-700 dark:bg-gray-100' : 'border-2 border-gray-100 dark:border-gray-600'} focus:border-none`}>
              <CheckOutline
                className={`size-full rounded-md font-bold ${activeKey === listDataKey ? 'visible' : 'invisible'} peer text-white dark:text-gray-700`}
              />
            </label>
            {USER_INFO_EXPIRATION.get(listDataKey)}
          </Button>
        )
      })}
      {USER_INFO_EXPIRATION.get(watchUserExpiration) !== '평생' ? (
        <WarnTxt
          content={`${USER_INFO_EXPIRATION.get(watchUserExpiration)} 동안 서비스를 이용하지 않을 시 자동으로 회원이 탈퇴돼요`}
          color="blue"
          type="error"
        />
      ) : null}
    </fieldset>
  )
}
