import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import {
  UserInfoGeneral,
  UserInfoSetting,
  UserInfoWithdraw,
} from '@/features/user-setting'
import { LoadingSpinner } from '@/shared/ui'
import Modals from '@/features/user-setting/ui/modal/Modals'

export const metadata: Metadata = {
  title: '개인설정',
}

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
      <Modals />
    </div>
  )
}
