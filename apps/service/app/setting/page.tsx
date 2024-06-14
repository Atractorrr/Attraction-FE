import {
  UserInfoAlert,
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'

export default function SettingPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <UserInfoSetting />
      <UserInfoGeneral />
      <UserInfoAlert />
      <UserInfoWithdraw />
    </div>
  )
}
