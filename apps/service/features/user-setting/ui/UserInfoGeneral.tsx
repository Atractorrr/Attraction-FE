import UserSettingItem from './modal/UserSettingItem'

export default function UserInfoGeneral() {
  return (
    <div className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="text-lg font-bold">일반</p>
      <UserSettingItem
        title="프로필 관심사 노출 설정"
        subTitle="다른 사람에게 내 관심사를 노출하지 않아요"
        bottomSubTitle
      />
      <UserSettingItem title="화면 테마 설정" subTitle="라이트 테마" />
    </div>
  )
}
