import { USER_INFO_EXPIRATION, UserSettingList } from '@/features/user-setting'
import { ExclamationCircleOutline } from '@attraction/icons'
import { useFormContext, useWatch } from 'react-hook-form'
import { SignUpFormType } from '../model'

export default function UserInfoExpirationDate() {
  const { setValue } = useFormContext<SignUpFormType>()
  const setExpirationFormValue = (keyItem: string) => {
    setValue('userExpiration', Number(keyItem))
  }
  const watchUserExpiration = useWatch<SignUpFormType>({
    name: 'userExpiration',
  }).toString()

  return (
    <label
      htmlFor="expirationDate"
      aria-label="개인정보 수집 유효기간"
      className="mb-5 block">
      <p className="mb-2 text-sm">개인정보 수집 유효기간</p>
      <UserSettingList
        listData={USER_INFO_EXPIRATION}
        wrap={false}
        initialItem="6"
        btnClickHandler={setExpirationFormValue}
      />
      {USER_INFO_EXPIRATION.get(watchUserExpiration) !== '평생' ? (
        <p className="mt-2 flex items-center gap-1 text-sm text-red-400">
          <ExclamationCircleOutline />
          {USER_INFO_EXPIRATION.get(watchUserExpiration)} 동안 서비스를 이용하지
          않을 시 자동으로 회원이 탈퇴돼요
        </p>
      ) : (
        ''
      )}
    </label>
  )
}
