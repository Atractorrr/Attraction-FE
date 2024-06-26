'use client'

import { Button } from '@attraction/design-system/dist'
import React, { useEffect, useState } from 'react'
import { USER_INFO_EXPIRATION, USER_INFO_OCCUPATION } from '../../constant'
import { ModalComponentPropType } from '../../model'
import UserSettingModal from './UserSettingModal'

interface UserSettingListProps {
  listData: typeof USER_INFO_EXPIRATION | typeof USER_INFO_OCCUPATION
  wrap: boolean
  setPostValue: React.Dispatch<React.SetStateAction<unknown>>
  initialItem?: string
}

function UserSettingList({
  initialItem,
  setPostValue,
  wrap,
  listData,
}: UserSettingListProps) {
  const [activeKey, setActiveKey] = useState(initialItem)
  const listDataKeys = Array.from(listData.keys())

  useEffect(() => {
    if (activeKey === initialItem) {
      setPostValue(undefined)
    }
  }, [activeKey, setPostValue, initialItem])

  return (
    <div
      className={
        wrap
          ? 'flex flex-wrap gap-x-3 gap-y-4 *:rounded-full'
          : 'mb-2 grid grid-cols-2 gap-2 *:w-full *:rounded-lg md:flex'
      }>
      {listDataKeys.map((listDataKey) => {
        return (
          <Button
            type="button"
            key={listDataKey}
            className={`rounded-full px-6 py-2 transition-colors ${
              activeKey === listDataKey
                ? 'bg-gray-700 text-gray-50 dark:bg-gray-50  dark:text-gray-700'
                : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            onClick={() => {
              setPostValue({ occupation: listDataKey })

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
          setPostValue={setPostValue}
          initialItem={initialValue as string}
        />
      )}
    />
  )
}
