/* eslint-disable jsx-a11y/label-has-associated-control */
import { THEME_LIST, Theme, useTheme } from '@/entities/theme'
import { Button } from '@attraction/design-system'
import { CheckOutline } from '@attraction/icons'
import { useState } from 'react'
import { ModalComponentPropType } from '../../model/type'
import UserSettingModal from './UserSettingModal'

interface UserSettingThemeModalType {
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

function UserSettingTheme({ setModalValue }: UserSettingThemeModalType) {
  const listDataKeys: Theme[] = ['system', 'light', 'dark']
  const { currentTheme } = useTheme()
  const [activeKey, setActiveKey] = useState(currentTheme)

  return (
    <div className="mb-5 block">
      {listDataKeys.map((listDataKey) => {
        return (
          <Button
            type="button"
            key={listDataKey}
            className="mb-5 flex gap-4"
            onClick={() => {
              setModalValue(listDataKey)
              setActiveKey(listDataKey)
            }}>
            <label
              htmlFor={listDataKey}
              className={` flex size-5 cursor-pointer items-center justify-center rounded-full p-1  ${activeKey === listDataKey ? 'bg-gray-700 dark:bg-gray-100' : 'border-2 border-gray-100 dark:border-gray-600'} focus:border-none`}>
              <CheckOutline
                className={`size-full rounded-md font-bold ${activeKey === listDataKey ? 'visible' : 'invisible'} peer text-white dark:text-gray-700`}
              />
            </label>
            {THEME_LIST[listDataKey]}
          </Button>
        )
      })}
    </div>
  )
}

export default function UserSettingThemeModal({
  onSubmit,
  onClose,
}: ModalComponentPropType) {
  return (
    <UserSettingModal
      title="개인정보 수집 유효기간 변경"
      postUserSetting={(value: unknown) => {
        onSubmit(value)
      }}
      closeHandler={() => {
        if (onClose) {
          onClose()
        }
      }}
      renderItem={(setPostValue) => (
        <UserSettingTheme setModalValue={setPostValue} />
      )}
    />
  )
}
