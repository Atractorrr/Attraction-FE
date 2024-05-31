import { USER_INFO_EXPIRATION, UserSettingList } from '@/entities/user-setting'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { SettingForm } from '../model'

export default function UserSettingExpiration() {
  const { setValue, getValues, watch } = useFormContext<SettingForm>()
  const setExpirationFormValue = (keyItem: string) => {
    setValue('userExpiration', Number(keyItem))
  }
  const watchUserExpiration = watch('userExpiration').toString()

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
        <p className="mt-2 text-sm text-red-500">
          {USER_INFO_EXPIRATION.get(watchUserExpiration)} 동안 서비스를 이용하지
          않을 시 자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </fieldset>
  )
}
