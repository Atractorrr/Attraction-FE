import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import { LoadingSpinner } from '@/shared/ui'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

export default function SettingPage() {
  const email = cookies().get('email')?.value as string

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <Suspense fallback={<LoadingSpinner />}>
        <UserInfoSetting email={email} />
      </Suspense>
      <UserInfoGeneral />
      {/* <UserInfoAlert /> */}
      <UserInfoWithdraw />
    </div>
  )
}
