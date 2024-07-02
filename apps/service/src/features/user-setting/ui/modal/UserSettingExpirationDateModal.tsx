/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { WarnTxt } from '@/shared/ui'
import { CheckOutline } from '@attraction/icons'
import { useEffect, useState } from 'react'
import { USER_INFO_EXPIRATION } from '../../constant'
import { ModalComponentPropType } from '../../model'
import UserSettingModal from './UserSettingModal'

interface UserInfoExpirationDateType {
  initialValue: string
  setModalValue: React.Dispatch<React.SetStateAction<unknown>>
}

function UserInfoExpirationDate({
  initialValue,
  setModalValue,
}: UserInfoExpirationDateType) {
  const [activeKey, setActiveKey] = useState(initialValue)
  const listDataKeys = Array.from(USER_INFO_EXPIRATION.keys())

  useEffect(() => {
    setModalValue({ userExpiration: Number(activeKey) })
  }, [activeKey, setModalValue])

  return (
    <div className="mb-5 block">
      <p className="mb-6 px-1">개인정보 수집 유효기간</p>
      {listDataKeys.map((listDataKey) => {
        return (
          <p
            key={listDataKey}
            className="peer flex items-center gap-4 peer-[]:mt-4">
            <span className="relative size-6">
              <input
                type="radio"
                name={listDataKey}
                value={listDataKey}
                className={`size-full cursor-pointer appearance-none rounded-full border-2 transition-colors disabled:cursor-auto ${
                  activeKey === listDataKey
                    ? 'border-gray-700 bg-gray-700 dark:border-gray-50 dark:bg-gray-50'
                    : 'border-gray-100 dark:border-gray-600'
                }`}
                checked={activeKey === listDataKey}
                onChange={() => setActiveKey(listDataKey)}
              />
              {activeKey === listDataKey && (
                <CheckOutline className="absolute inset-0 m-auto size-4 rounded-md font-bold text-white dark:text-gray-700" />
              )}
            </span>
            <label
              htmlFor={listDataKey}
              className="cursor-pointer whitespace-nowrap text-lg"
              onClick={() => {
                setModalValue({ userExpiration: Number(listDataKey) })
                setActiveKey(listDataKey)
              }}>
              {USER_INFO_EXPIRATION.get(listDataKey)}
            </label>
          </p>
        )
      })}
      {USER_INFO_EXPIRATION.get(activeKey) !== '평생' ? (
        <div className="mt-5">
          <WarnTxt
            content={`${USER_INFO_EXPIRATION.get(activeKey)} 동안 서비스를 이용하지 않을 시 자동으로 회원이 탈퇴돼요`}
            color="blue"
            type="info"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default function UserSettingExpirationDateModal({
  onSubmit,
  onClose,
  initialValue,
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
        <UserInfoExpirationDate
          setModalValue={setPostValue}
          initialValue={initialValue as string}
        />
      )}
    />
  )
}
