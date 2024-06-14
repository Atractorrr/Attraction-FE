import UserSettingItem from './UserSettingItem'

export default function UserInfoSetting() {
  return (
    <div className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="text-lg font-bold">계정</p>
      <UserSettingItem title="닉네임 변경" subTitle="kang" />
      <UserSettingItem
        title="관심사 변경"
        subTitle="IT/테크, 비즈/재테크, 디자인, 트렌드/라이프"
      />
      <UserSettingItem title="산업분야 변경" subTitle="자택 경비원" />
      <UserSettingItem
        title="개인정보 수집 유효기간 변경"
        subTitle=" 오늘부터 2024. 12. 13. 까지 활동이 없을 경우 계정이 자동으로
            탈퇴돼요"
        bottomSubTitle
      />
      <UserSettingItem
        title="약관 및 개인정보 처리 동의"
        subTitle="2024. 06. 13."
      />
    </div>
  )
}
