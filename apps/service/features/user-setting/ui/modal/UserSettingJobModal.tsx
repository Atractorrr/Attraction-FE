'use client'

import { Button } from '@attraction/design-system/dist'
import { useState } from 'react'
import { USER_INFO_EXPIRATION, USER_INFO_OCCUPATION } from '../../constant'
import { ModalComponentPropType } from '../../model/type'
import UserSettingModal from './UserSettingModal'

interface UserSettingListProps {
  listData: typeof USER_INFO_EXPIRATION | typeof USER_INFO_OCCUPATION
  wrap: boolean
  btnClickHandler: (keyItem: string) => void
  initialItem?: string
}

function UserSettingList({
  initialItem,
  btnClickHandler,
  wrap,
  listData,
}: UserSettingListProps) {
  const [activeKey, setActiveKey] = useState(initialItem)
  const listDataKeys = Array.from(listData.keys())

  return (
    <div
      className={`${wrap ? 'flex flex-wrap gap-4 *:rounded-full' : 'mb-2 grid grid-cols-2 gap-2 *:w-full *:rounded-lg md:flex'}`}>
      {listDataKeys.map((listDataKey) => {
        return (
          <Button
            type="button"
            key={listDataKey}
            className={`rounded-lg ${activeKey === listDataKey ? 'bg-gray-700 text-white dark:bg-gray-50  dark:text-gray-700' : 'bg-gray-50 dark:bg-gray-700'} px-6 py-2 `}
            onClick={() => {
              btnClickHandler.call(null, listDataKey)
              setActiveKey(listDataKey)
            }}>
            {listData.get(listDataKey)}
          </Button>
        )
      })}
    </div>
  )
}

export default function UserSettingJobModal({
  onSubmit,
  onClose,
  initialValue,
}: ModalComponentPropType) {
  return (
    <UserSettingModal
      title="산업분야 변경"
      postUserSetting={(value: unknown) => {
        onSubmit(value)
      }}
      closeHandler={() => {
        if (onClose) {
          onClose()
        }
      }}
      renderItem={(setPostValue) => (
        <UserSettingList
          listData={USER_INFO_OCCUPATION}
          wrap
          btnClickHandler={(keyItem) => {
            setPostValue({ occupation: keyItem })
          }}
          initialItem={initialValue as string}
        />
      )}
    />
  )
}
