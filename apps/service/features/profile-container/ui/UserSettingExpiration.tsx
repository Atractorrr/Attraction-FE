import { USER_INFO_EXPIRATION, UserSettingList } from '@/entities/user-setting'
import React from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { ExclamationCircleOutline } from '@attraction/icons'
import { SettingForm } from '../model'

export default function UserSettingExpiration() {
  const { setValue, getValues, control } = useFormContext<SettingForm>()
  const setExpirationFormValue = (keyItem: string) => {
    setValue('userExpiration', Number(keyItem))
  }
  const watchUserExpiration = useWatch<SettingForm>({
    name: 'userExpiration',
    control,
  }).toString()

  return (
    <fieldset>
      <legend className="mb-4 text-sm font-medium">개인정보 유효기간</legend>
      <UserSettingList
        listData={USER_INFO_EXPIRATION}
        wrap={false}
        initialItem={getValues('userExpiration').toString()}
        btnClickHandler={setExpirationFormValue}
      />
      {USER_INFO_EXPIRATION.get(watchUserExpiration) !== '평생' ? (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
          <ExclamationCircleOutline />
          {USER_INFO_EXPIRATION.get(watchUserExpiration)} 동안 서비스를 이용하지
          않을 시 자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </fieldset>
  )
}
