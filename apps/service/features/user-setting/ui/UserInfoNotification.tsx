import UserSettingItem from './modal/UserSettingItem'

export default function UserInfoAlert() {
  return (
    <div className="flex w-full max-w-[600px] flex-col gap-7 rounded-2xl bg-white p-6 dark:bg-gray-700">
      <p className="text-lg font-bold">알림</p>
      <UserSettingItem title="앱 푸시 알림" icon="chevron" />
      <UserSettingItem
        title="마케팅 정보 수신 동의"
        subTitle="동의함"
        icon="chevron"
      />
    </div>
  )
}
