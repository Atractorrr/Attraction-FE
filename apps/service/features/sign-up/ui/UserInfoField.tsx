import UserInfoExpirationDate from './UserInfoExpirationDate'
import UserAgreement from './UserAgreement'
import UserInfoNicknameInput from './UserInfoNicknameInput'
import UserInfoBirthInput from './UserInfoBirthInput'

export default function UserInfoField() {
  return (
    <fieldset className="grow overflow-y-auto">
      <legend className="mb-12 break-keep text-2xl font-bold">
        서비스 이용에 있어
        <br /> 필수 정보를 입력해주세요
      </legend>
      <div className="flex h-full flex-col ">
        <UserInfoNicknameInput />
        <UserInfoBirthInput />
        <UserInfoExpirationDate />
        <UserAgreement />
      </div>
    </fieldset>
  )
}
