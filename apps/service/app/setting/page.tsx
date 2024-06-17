import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import { LoadingSpinner } from '@/shared/ui'
import { Suspense } from 'react'

export default function SettingPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <Suspense fallback={<LoadingSpinner />}>
        <UserInfoSetting />
      </Suspense>
      <UserInfoGeneral />
      {/* <UserInfoAlert /> */}
      <UserInfoWithdraw />
    </div>
  )
}
