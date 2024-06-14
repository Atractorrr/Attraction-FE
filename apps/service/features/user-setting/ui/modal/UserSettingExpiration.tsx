/* eslint-disable jsx-a11y/label-has-associated-control */

import { Button } from '@attraction/design-system/dist'
import { CheckOutline, ExclamationCircleOutline } from '@attraction/icons'
import { useState } from 'react'
import { USER_INFO_EXPIRATION } from '../../constant'

interface UserInfoExpirationDateType {
  initialValue: string
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

export default function UserInfoExpirationDate({
  initialValue,
  setModalValue,
}: UserInfoExpirationDateType) {
  const [activeKey, setActiveKey] = useState(initialValue)
  const listDataKeys = Array.from(USER_INFO_EXPIRATION.keys())

  return (
    <fieldset className="mb-5 block">
      <p className="mb-6">개인정보 수집 유효기간</p>
      {listDataKeys.map((listDataKey) => {
        return (
          <Button
            type="button"
            key={listDataKey}
            className="mb-5 flex gap-4"
            onClick={() => {
              setModalValue(Number(listDataKey))
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
      {USER_INFO_EXPIRATION.get(activeKey) !== '평생' ? (
        <p className="mt-4 flex items-center gap-1 text-sm text-blue-400">
          <ExclamationCircleOutline />
          {USER_INFO_EXPIRATION.get(activeKey)} 동안 서비스를 이용하지 않을 시
          자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </fieldset>
  )
}
