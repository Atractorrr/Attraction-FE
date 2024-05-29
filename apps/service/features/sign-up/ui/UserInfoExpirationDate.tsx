import { useFormContext } from 'react-hook-form'
import { USER_INFO_EXPIRATION, UserSettingList } from '@/entities/user-setting'
import { SignUpFormType } from '../model'

export default function UserInfoExpirationDate() {
  const { setValue, watch } = useFormContext<SignUpFormType>()
  const setExpirationFormValue = (keyItem: string) => {
    setValue('userExpiration', Number(keyItem))
  }
  const watchUserExpiration = watch('userExpiration').toString()

  return (
    <label
      htmlFor="expirationDate"
      aria-label="개인정보 수집 유효기간"
      className="mb-5 block">
      <p className="mb-2 text-sm text-gray-700">개인정보 수집 유효기간</p>
      <UserSettingList
        listData={USER_INFO_EXPIRATION}
        wrap={false}
        initialItem={USER_INFO_EXPIRATION.get('6')}
        btnClickHandler={setExpirationFormValue}
      />
      {USER_INFO_EXPIRATION.get(watchUserExpiration) !== '평생' ? (
        <p className="text-sm text-red-500 ">
          {USER_INFO_EXPIRATION.get(watchUserExpiration)} 동안 서비스를 이용하지
          않을 시 자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </label>
  )
}
